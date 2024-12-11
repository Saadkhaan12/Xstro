import { isJidGroup } from 'baileys';
import { DataTypes } from 'sequelize';
import DATABASE from '../lib/database.js';

const messageDb = DATABASE.define(
	'message',
	{
		jid: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		message: {
			type: DataTypes.JSON,
			allowNull: false,
		},
		id: {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true,
		},
	},
	{
		tableName: 'messages',
		timestamps: true,
	},
);

const contactDb = DATABASE.define(
	'contact',
	{
		jid: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		tableName: 'contact',
		timestamps: false,
	},
);

const handleError = error => {
	console.error('Database operation failed:', error);
};

const saveContact = async (jid, name) => {
	if (!jid || !name || isJidGroup(jid)) return;
	const contact = await contactDb.findOne({ where: { jid } });
	if (contact) {
		if (contact.name !== name) {
			await contactDb.update({ name }, { where: { jid } }).catch(handleError);
		}
	} else {
		await contactDb.create({ jid, name }).catch(handleError);
	}
};

const saveMessage = async message => {
	const jid = message.key.remoteJid;
	const id = message.key.id;
	const msg = message;
	if (!id || !jid || !msg) return;
	await saveContact(message.sender, message.pushName);
	let exists = await messageDb.findOne({ where: { id, jid } });
	if (exists) {
		await messageDb.update({ message: msg }, { where: { id, jid } }).catch(handleError);
	} else {
		await messageDb.create({ id, jid, message: msg }).catch(handleError);
	}
};

const loadMessage = async id => {
	if (!id) return;
	const message = await messageDb.findOne({ where: { id } });
	return message ? message.dataValues : null;
};

const getName = async jid => {
	const contact = await contactDb.findOne({ where: { jid } });
	return contact ? contact.name : jid.split('@')[0].replace(/_/g, ' ');
};

const getChatSummary = async () => {
	try {
		const distinctChats = await messageDb.findAll({
			attributes: ['jid'],
			group: ['jid'],
		});

		const chatSummaries = await Promise.all(
			distinctChats.map(async chat => {
				const jid = chat.jid;
				const messageCount = await messageDb.count({
					where: { jid },
				});

				const lastMessage = await messageDb.findOne({
					where: { jid },
					order: [['createdAt', 'DESC']],
				});

				const chatName = isJidGroup(jid) ? jid : await getName(jid);

				return {
					jid,
					name: chatName,
					messageCount,
					lastMessageTimestamp: lastMessage ? lastMessage.createdAt : null,
				};
			}),
		);

		return chatSummaries.sort((a, b) => b.lastMessageTimestamp - a.lastMessageTimestamp);
	} catch (error) {
		console.error('Error retrieving chat summaries:', error);
		return [];
	}
};

export { saveContact, saveMessage, loadMessage, getName, getChatSummary };
