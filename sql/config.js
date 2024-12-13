import { DataTypes } from 'sequelize';
import DATABASE from '../lib/database.js';

const CONFIG_CMDS = DATABASE.define(
	'CONFIG_CMDS',
	{
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true,
		},
		autoRead: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		autoStatusRead: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		cmdReact: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		cmdRead: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: false,
		},
		mode: {
			type: DataTypes.BOOLEAN,
			allowNull: false,
			defaultValue: true,
		},
	},
	{
		tableName: 'configs',
		timestamps: false,
	},
);

async function updateConfig(field, value) {
	const boolValue = !!value;
	let [config, created] = await CONFIG_CMDS.findOrCreate({
		where: { id: 1 }, // Ensure a specific record is targeted
		defaults: {
			autoRead: false,
			autoStatusRead: false,
			cmdReact: true,
			cmdRead: false,
			mode: false,
		},
	});

	await config.update({ [field]: boolValue });

	return config;
}

async function getConfig() {
	const config = await CONFIG_CMDS.findOne({ where: { id: 1 } });
	return config
		? {
				autoRead: config.autoRead,
				autoStatusRead: config.autoStatusRead,
				cmdReact: config.cmdReact,
				cmdRead: config.cmdRead,
				mode: config.mode,
		  }
		: {
				autoRead: false,
				autoStatusRead: false,
				cmdReact: true,
				cmdRead: false,
				mode: true,
		  };
}

export { updateConfig, getConfig };