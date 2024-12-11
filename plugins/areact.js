import { bot } from '../lib/cmds.js';
import { getRandom } from '../lib/utils.js';
import AutoReact from '../sql/areact.js';

bot(
	{
		pattern: 'areact',
		isPublic: false,
		desc: 'Toggle Auto React On/Off',
		type: 'user',
	},
	async (message, match) => {
		const status = match;
		const newStatus = status === 'on';
		const currentSetting = await AutoReact.findOne();
		if (currentSetting) {
			await AutoReact.update({ status: newStatus }, { where: {} });
		} else {
			await AutoReact.create({ status: newStatus });
		}
		await message.send(`_Autoreact set to ${newStatus ? 'ON' : 'OFF'}._`);
	},
);

bot(
	{
		on: 'text',
		dontAddCommandList: true,
	},
	async message => {
		const autoReactSetting = await AutoReact.findOne();
		if (autoReactSetting?.status) {
			const emoji = getRandom(emojis);
			await message.react(emoji);
		}
	},
);

let emojis = [
	'💘',
	'💝',
	'💖',
	'💗',
	'💓',
	'💞',
	'💕',
	'💟',
	'❣️',
	'💔',
	'❤️',
	'🧡',
	'💛',
	'💚',
	'💙',
	'💜',
	'🤎',
	'🖤',
	'🤍',
	'❤️‍',
	'🔥',
	'❤️‍',
	'🩹',
	'💯',
	'♨️',
	'💢',
	'💬',
	'👁️‍🗨️',
	'🗨️',
	'🗯️',
	'💭',
	'💤',
	'🌐',
	'♠️',
	'♥️',
	'♦️',
	'♣️',
	'🃏',
	'🀄️',
	'🎴',
	'🎭️',
	'🔇',
	'🔈️',
	'🔉',
	'🔊',
	'🔔',
	'🔕',
	'🎼',
	'🎵',
	'🎶',
	'💹',
	'🏧',
	'🚮',
	'🚰',
	'♿️',
	'🚹️',
	'🚺️',
	'🚻',
	'🚼️',
	'🚾',
	'🛂',
	'🛃',
	'🛄',
	'🛅',
	'⚠️',
	'🚸',
	'⛔️',
	'🚫',
	'🚳',
	'🚭️',
	'🚯',
	'🚱',
	'🚷',
	'📵',
	'🔞',
	'☢️',
	'☣️',
	'⬆️',
	'↗️',
	'➡️',
	'↘️',
	'⬇️',
	'↙️',
	'⬅️',
	'↖️',
	'↕️',
	'↔️',
	'↩️',
	'↪️',
	'⤴️',
	'⤵️',
	'🔃',
	'🔄',
	'🔙',
	'🔚',
	'🔛',
	'🔜',
	'🔝',
	'🛐',
	'⚛️',
	'🕉️',
	'✡️',
	'☸️',
	'☯️',
	'✝️',
	'☦️',
	'☪️',
	'☮️',
	'🕎',
	'🔯',
	'♈️',
	'♉️',
	'♊️',
	'♋️',
	'♌️',
	'♍️',
	'♎️',
	'♏️',
	'♐️',
	'♑️',
	'♒️',
	'♓️',
	'⛎',
	'🔀',
	'🔁',
	'🔂',
	'▶️',
	'⏩️',
	'⏭️',
	'⏯️',
	'◀️',
	'⏪️',
	'⏮️',
	'🔼',
	'⏫',
	'🔽',
	'⏬',
	'⏸️',
	'⏹️',
	'⏺️',
	'⏏️',
	'🎦',
	'🔅',
	'🔆',
	'📶',
	'📳',
	'📴',
	'♀️',
	'♂️',
	'⚧',
	'✖️',
	'➕',
	'➖',
	'➗',
	'♾️',
	'‼️',
	'⁉️',
	'❓️',
	'❔',
	'❕',
	'❗️',
	'〰️',
	'💱',
	'💲',
	'⚕️',
	'♻️',
	'⚜️',
	'🔱',
	'📛',
	'🔰',
	'⭕️',
	'✅',
	'☑️',
	'✔️',
	'❌',
	'❎',
	'➰',
	'➿',
	'〽️',
	'✳️',
	'✴️',
	'❇️',
	'©️',
	'®️',
	'™️',
	'#️⃣',
	'*️⃣',
	'0️⃣',
	'1️⃣',
	'2️⃣',
	'3️⃣',
	'4️⃣',
	'5️⃣',
	'6️⃣',
	'7️⃣',
	'8️⃣',
	'9️⃣',
	'🔟',
	'🔠',
	'🔡',
	'🔢',
	'🔣',
	'🔤',
	'🅰️',
	'🆎',
	'🅱️',
	'🆑',
	'🆒',
	'🆓',
	'ℹ️',
	'🆔',
	'Ⓜ️',
	'🆕',
	'🆖',
	'🅾️',
	'🆗',
	'🅿️',
	'🆘',
	'🆙',
	'🆚',
	'🈁',
	'🈂️',
	'🈷️',
	'🈶',
	'🈯️',
	'🉐',
	'🈹',
	'🈚️',
	'🈲',
	'🉑',
	'🈸',
	'🈴',
	'🈳',
	'㊗️',
	'㊙️',
	'🈺',
	'🈵',
	'🔴',
	'🟠',
	'🟡',
	'🟢',
	'🔵',
	'🟣',
	'🟤',
	'⚫️',
	'⚪️',
	'🟥',
	'🟧',
	'🟨',
	'🟩',
	'🟦',
	'🟪',
	'🟫',
	'⬛️',
	'⬜️',
	'◼️',
	'◻️',
	'◾️',
	'◽️',
	'▪️',
	'▫️',
	'🔶',
	'🔷',
	'🔸',
	'🔹',
	'🔺',
	'🔻',
	'💠',
	'🔘',
	'🔳',
	'🔲',
	'🕛️',
	'🕧️',
	'🕐️',
	'🕜️',
	'🕑️',
	'🕝️',
	'🕒️',
	'🕞️',
	'🕓️',
	'🕟️',
	'🕔️',
	'🕠️',
	'🕕️',
	'🕡️',
	'🕖️',
	'🕢️',
	'🕗️',
	'🕣️',
	'🕘️',
	'🕤️',
	'🕙️',
	'🕥️',
	'🕚️',
	'🕦️',
	'*️',
	'#️',
	'0️',
	'1️',
	'2️',
	'3️',
	'4️',
	'5️',
	'6️',
	'7️',
	'8️',
	'9️',
	'🛎️',
	'🧳',
	'⌛️',
	'⏳️',
	'⌚️',
	'⏰',
	'⏱️',
	'⏲️',
	'🕰️',
	'🌡️',
	'🗺️',
	'🧭',
	'🎃',
	'🎄',
	'🧨',
	'🎈',
	'🎉',
	'🎊',
	'🎎',
	'🎏',
	'🎐',
	'🎀',
	'🎁',
	'🎗️',
	'🎟️',
	'🎫',
	'🔮',
	'🧿',
	'🎮️',
	'🕹️',
	'🎰',
	'🎲',
	'♟️',
	'🧩',
	'🧸',
	'🖼️',
	'🎨',
	'🧵',
	'🧶',
	'👓️',
	'🕶️',
	'🥽',
	'🥼',
	'🦺',
	'👔',
	'👕',
	'👖',
	'🧣',
	'🧤',
	'🧥',
	'🧦',
	'👗',
	'👘',
	'🥻',
	'🩱',
	'🩲',
	'🩳',
	'👙',
	'👚',
	'👛',
	'👜',
	'👝',
	'🛍️',
	'🎒',
	'👞',
	'👟',
	'🥾',
	'🥿',
	'👠',
	'👡',
	'🩰',
	'👢',
	'👑',
	'👒',
	'🎩',
	'🎓️',
	'🧢',
	'⛑️',
	'📿',
	'💄',
	'💍',
	'💎',
	'📢',
	'📣',
	'📯',
	'🎙️',
	'🎚️',
	'🎛️',
	'🎤',
	'🎧️',
	'📻️',
	'🎷',
	'🎸',
	'🎹',
	'🎺',
	'🎻',
	'🪕',
	'🥁',
	'📱',
	'📲',
	'☎️',
	'📞',
	'📟️',
	'📠',
	'🔋',
	'🔌',
	'💻️',
	'🖥️',
	'🖨️',
	'⌨️',
	'🖱️',
	'🖲️',
	'💽',
	'💾',
	'💿️',
	'📀',
	'🧮',
	'🎥',
	'🎞️',
	'📽️',
	'🎬️',
	'📺️',
	'📷️',
	'📸',
	'📹️',
	'📼',
	'🔍️',
	'🔎',
	'🕯️',
	'💡',
	'🔦',
	'🏮',
	'🪔',
	'📔',
	'📕',
	'📖',
	'📗',
	'📘',
	'📙',
	'📚️',
	'📓',
	'📒',
	'📃',
	'📜',
	'📄',
	'📰',
	'🗞️',
	'📑',
	'🔖',
	'🏷️',
	'💰️',
	'💴',
	'💵',
	'💶',
	'💷',
	'💸',
	'💳️',
	'🧾',
	'✉️',
	'💌',
	'📧',
	'🧧',
	'📨',
	'📩',
	'📤️',
	'📥️',
	'📦️',
	'📫️',
	'📪️',
	'📬️',
	'📭️',
	'📮',
	'🗳️',
	'✏️',
	'✒️',
	'🖋️',
	'🖊️',
	'🖌️',
	'🖍️',
	'📝',
	'💼',
	'📁',
	'📂',
	'🗂️',
	'📅',
	'📆',
	'🗒️',
	'🗓️',
	'📇',
	'📈',
	'📉',
	'📊',
	'📋️',
	'📌',
	'📍',
	'📎',
	'🖇️',
	'📏',
	'📐',
	'✂️',
	'🗃️',
	'🗄️',
	'🗑️',
	'🔒️',
	'🔓️',
	'🔏',
	'🔐',
	'🔑',
	'🗝️',
	'🔨',
	'🪓',
	'⛏️',
	'⚒️',
	'🛠️',
	'🗡️',
	'⚔️',
	'💣️',
	'🏹',
	'🛡️',
	'🔧',
	'🔩',
	'⚙️',
	'🗜️',
	'⚖️',
	'🦯',
	'🔗',
	'⛓️',
	'🧰',
	'🧲',
	'⚗️',
	'🧪',
	'🧫',
	'🧬',
	'🔬',
	'🔭',
	'📡',
	'💉',
	'🩸',
	'💊',
	'🩹',
	'🩺',
	'🚪',
	'🛏️',
	'🛋️',
	'🪑',
	'🚽',
	'🚿',
	'🛁',
	'🪒',
	'🧴',
	'🧷',
	'🧹',
	'🧺',
	'🧻',
	'🧼',
	'🧽',
	'🧯',
	'🛒',
	'🚬',
	'⚰️',
	'⚱️',
	'🏺',
	'🕳️',
	'🏔️',
	'⛰️',
	'🌋',
	'🗻',
	'🏕️',
	'🏖️',
	'🏜️',
	'🏝️',
	'🏟️',
	'🏛️',
	'🏗️',
	'🧱',
	'🏘️',
	'🏚️',
	'🏠️',
	'🏡',
	'🏢',
	'🏣',
	'🏤',
	'🏥',
	'🏦',
	'🏨',
	'🏩',
	'🏪',
	'🏫',
	'🏬',
	'🏭️',
	'🏯',
	'🏰',
	'💒',
	'🗼',
	'🗽',
	'⛪️',
	'🕌',
	'🛕',
	'🕍',
	'⛩️',
	'🕋',
	'⛲️',
	'⛺️',
	'🌁',
	'🌃',
	'🏙️',
	'🌄',
	'🌅',
	'🌆',
	'🌇',
	'🌉',
	'🗾',
	'🏞️',
	'🎠',
	'🎡',
	'🎢',
	'💈',
	'🎪',
	'🚂',
	'🚃',
	'🚄',
	'🚅',
	'🚆',
	'🚇️',
	'🚈',
	'🚉',
	'🚊',
	'🚝',
	'🚞',
	'🚋',
	'🚌',
	'🚍️',
	'🚎',
	'🚐',
	'🚑️',
	'🚒',
	'🚓',
	'🚔️',
	'🚕',
	'🚖',
	'🚗',
	'🚘️',
	'🚙',
	'🚚',
	'🚛',
	'🚜',
	'🏎️',
	'🏍️',
	'🛵',
	'🦽',
	'🦼',
	'🛺',
	'🚲️',
	'🛴',
	'🛹',
	'🚏',
	'🛣️',
	'🛤️',
	'🛢️',
	'⛽️',
	'🚨',
	'🚥',
	'🚦',
	'🛑',
	'🚧',
	'⚓️',
	'⛵️',
	'🛶',
	'🚤',
	'🛳️',
	'⛴️',
	'🛥️',
	'🚢',
	'✈️',
	'🛩️',
	'🛫',
	'🛬',
	'🪂',
	'💺',
	'🚁',
	'🚟',
	'🚠',
	'🚡',
	'🛰️',
	'🚀',
	'🛸',
	'🎆',
	'🎇',
	'🎑',
	'🗿',
	'⚽️',
	'⚾️',
	'🥎',
	'🏀',
	'🏐',
	'🏈',
	'🏉',
	'🎾',
	'🥏',
	'🎳',
	'🏏',
	'🏑',
	'🏒',
	'🥍',
	'🏓',
	'🏸',
	'🥊',
	'🥋',
	'🥅',
	'⛳️',
	'⛸️',
	'🎣',
	'🤿',
	'🎽',
	'🎿',
	'🛷',
	'🥌',
	'🎯',
	'🪀',
	'🪁',
	'🎱',
	'🎖️',
	'🏆️',
	'🏅',
	'🥇',
	'🥈',
	'🥉',
	'🍇',
	'🍈',
	'🍉',
	'🍊',
	'🍋',
	'🍌',
	'🍍',
	'🥭',
	'🍎',
	'🍏',
	'🍐',
	'🍑',
	'🍒',
	'🍓',
	'🥝',
	'🍅',
	'🥥',
	'🥑',
	'🍆',
	'🥔',
	'🥕',
	'🌽',
	'🌶️',
	'🥒',
	'🥬',
	'🥦',
	'🧄',
	'🧅',
	'🍄',
	'🥜',
	'🌰',
	'🍞',
	'🥐',
	'🥖',
	'🥨',
	'🥯',
	'🥞',
	'🧇',
	'🧀',
	'🍖',
	'🍗',
	'🥩',
	'🥓',
	'🍔',
	'🍟',
	'🍕',
	'🌭',
	'🥪',
	'🌮',
	'🌯',
	'🥙',
	'🧆',
	'🥚',
	'🍳',
	'🥘',
	'🍲',
	'🥣',
	'🥗',
	'🍿',
	'🧈',
	'🧂',
	'🥫',
	'🍱',
	'🍘',
	'🍙',
	'🍚',
	'🍛',
	'🍜',
	'🍝',
	'🍠',
	'🍢',
	'🍣',
	'🍤',
	'🍥',
	'🥮',
	'🍡',
	'🥟',
	'🥠',
	'🥡',
	'🍦',
	'🍧',
	'🍨',
	'🍩',
	'🍪',
	'🎂',
	'🍰',
	'🧁',
	'🥧',
	'🍫',
	'🍬',
	'🍭',
	'🍮',
	'🍯',
	'🍼',
	'🥛',
	'☕️',
	'🍵',
	'🍶',
	'🍾',
	'🍷',
	'🍸️',
	'🍹',
	'🍺',
	'🍻',
	'🥂',
	'🥃',
	'🥤',
	'🧃',
	'🧉',
	'🧊',
	'🥢',
	'🍽️',
	'🍴',
	'🥄',
	'🔪',
	'🐵',
	'🐒',
	'🦍',
	'🦧',
	'🐶',
	'🐕️',
	'🦮',
	'🐕‍',
	'🦺',
	'🐩',
	'🐺',
	'🦊',
	'🦝',
	'🐱',
	'🐈️',
	'🐈‍',
	'🦁',
	'🐯',
	'🐅',
	'🐆',
	'🐴',
	'🐎',
	'🦄',
	'🦓',
	'🦌',
	'🐮',
	'🐂',
	'🐃',
	'🐄',
	'🐷',
	'🐖',
	'🐗',
	'🐽',
	'🐏',
	'🐑',
	'🐐',
	'🐪',
	'🐫',
	'🦙',
	'🦒',
	'🐘',
	'🦏',
	'🦛',
	'🐭',
	'🐁',
	'🐀',
	'🐹',
	'🐰',
	'🐇',
	'🐿️',
	'🦔',
	'🦇',
	'🐻',
	'🐻‍',
	'❄️',
	'🐨',
	'🐼',
	'🦥',
	'🦦',
	'🦨',
	'🦘',
	'🦡',
	'🐾',
	'🦃',
	'🐔',
	'🐓',
	'🐣',
	'🐤',
	'🐥',
	'🐦️',
	'🐧',
	'🕊️',
	'🦅',
	'🦆',
	'🦢',
	'🦉',
	'🦩',
	'🦚',
	'🦜',
	'🐸',
	'🐊',
	'🐢',
	'🦎',
	'🐍',
	'🐲',
	'🐉',
	'🦕',
	'🦖',
	'🐳',
	'🐋',
	'🐬',
	'🐟️',
	'🐠',
	'🐡',
	'🦈',
	'🐙',
	'🦑',
	'🦀',
	'🦞',
	'🦐',
	'🦪',
	'🐚',
	'🐌',
	'🦋',
	'🐛',
	'🐜',
	'🐝',
	'🐞',
	'🦗',
	'🕷️',
	'🕸️',
	'🦂',
	'🦟',
	'🦠',
	'💐',
	'🌸',
	'💮',
	'🏵️',
	'🌹',
	'🥀',
	'🌺',
	'🌻',
	'🌼',
	'🌷',
	'🌱',
	'🌲',
	'🌳',
	'🌴',
	'🌵',
	'🎋',
	'🎍',
	'🌾',
	'🌿',
	'☘️',
	'🍀',
	'🍁',
	'🍂',
	'🍃',
	'🌍️',
	'🌎️',
	'🌏️',
	'🌑',
	'🌒',
	'🌓',
	'🌔',
	'🌕️',
	'🌖',
	'🌗',
	'🌘',
	'🌙',
	'🌚',
	'🌛',
	'🌜️',
	'☀️',
	'🌝',
	'🌞',
	'🪐',
	'💫',
	'⭐️',
	'🌟',
	'✨',
	'🌠',
	'🌌',
	'☁️',
	'⛅️',
	'⛈️',
	'🌤️',
	'🌥️',
	'🌦️',
	'🌧️',
	'🌨️',
	'🌩️',
	'🌪️',
	'🌫️',
	'🌬️',
	'🌀',
	'🌈',
	'🌂',
	'☂️',
	'☔️',
	'⛱️',
	'⚡️',
	'❄️',
	'☃️',
	'⛄️',
	'☄️',
	'🔥',
	'💧',
	'🌊',
	'💥',
	'💦',
	'💨',
	'😀',
	'😃',
	'😄',
	'😁',
	'😆',
	'😅',
	'🤣',
	'😂',
	'🙂',
	'🙃',
	'😉',
	'😊',
	'😇',
	'🥰',
	'😍',
	'🤩',
	'😘',
	'😗',
	'☺️',
	'😚',
	'😙',
	'😋',
	'😛',
	'😜',
	'🤪',
	'😝',
	'🤑',
	'🤗',
	'🤭',
	'🤫',
	'🤔',
	'🤐',
	'🤨',
	'😐️',
	'😑',
	'😶',
	'😏',
	'😒',
	'🙄',
	'😬',
	'🤥',
	'😌',
	'😔',
	'😪',
	'😮‍',
	'💨',
	'🤤',
	'😴',
	'😷',
	'🤒',
	'🤕',
	'🤢',
	'🤮',
	'🤧',
	'🥵',
	'🥶',
	'😶‍',
	'🌫️',
	'🥴',
	'😵‍',
	'💫',
	'😵',
	'🤯',
	'🤠',
	'🥳',
	'😎',
	'🤓',
	'🧐',
	'😕',
	'😟',
	'🙁',
	'☹️',
	'😮',
	'😯',
	'😲',
	'😳',
	'🥺',
	'😦',
	'😧',
	'😨',
	'😰',
	'😥',
	'😢',
	'😭',
	'😱',
	'😖',
	'😣',
	'😞',
	'😓',
	'😩',
	'😫',
	'🥱',
	'😤',
	'😡',
	'😠',
	'🤬',
	'😈',
	'👿',
	'💀',
	'☠️',
	'💩',
	'🤡',
	'👹',
	'👺',
	'👻',
	'👽️',
	'👾',
	'🤖',
	'😺',
	'😸',
	'😹',
	'😻',
	'😼',
	'😽',
	'🙀',
	'😿',
	'😾',
	'🙈',
	'🙉',
	'🙊',
	'👋',
	'🤚',
	'🖐️',
	'✋',
	'🖖',
	'👌',
	'🤏',
	'✌️',
	'🤞',
	'🤟',
	'🤘',
	'🤙',
	'👈️',
	'👉️',
	'👆️',
	'🖕',
	'👇️',
	'☝️',
	'👍️',
	'👎️',
	'✊',
	'👊',
	'🤛',
	'🤜',
	'👏',
	'🙌',
	'👐',
	'🤲',
	'🤝',
	'🙏',
	'✍️',
	'💅',
	'🤳',
	'💪',
	'🦾',
	'🦿',
	'🦵',
	'🦶',
	'👂️',
	'🦻',
	'👃',
	'🧠',
	'🦷',
	'🦴',
	'👀',
	'👁️',
	'👅',
	'👄',
	'💋',
	'👶',
	'🧒',
	'👦',
	'👧',
	'🧑',
	'👨',
	'👩',
	'🧔',
	'🧔‍♀️',
	'🧔‍♂️',
	'🧑',
	'👨‍',
	'🦰',
	'👩‍',
	'🦰',
	'🧑',
	'👨‍',
	'🦱',
	'👩‍',
	'🦱',
	'🧑',
	'👨‍',
	'🦳',
	'👩‍',
	'🦳',
	'🧑',
	'👨‍',
	'🦲',
	'👩‍',
	'🦲',
	'👱',
	'👱‍♂️',
	'👱‍♀️',
	'🧓',
	'👴',
	'👵',
	'🙍',
	'🙍‍♂️',
	'🙍‍♀️',
	'🙎',
	'🙎‍♂️',
	'🙎‍♀️',
	'🙅',
	'🙅‍♂️',
	'🙅‍♀️',
	'🙆',
	'🙆‍♂️',
	'🙆‍♀️',
	'💁',
	'💁‍♂️',
	'💁‍♀️',
	'🙋',
	'🙋‍♂️',
	'🙋‍♀️',
	'🧏',
	'🧏‍♂️',
	'🧏‍♀️',
	'🙇',
	'🙇‍♂️',
	'🙇‍♀️',
	'🤦',
	'🤦‍♂️',
	'🤦‍♀️',
	'🤷',
	'🤷‍♂️',
	'🤷‍♀️',
	'🧑‍⚕️',
	'👨‍⚕️',
	'👩‍⚕️',
	'🧑‍🎓',
	'👨‍🎓',
	'👩‍🎓',
	'🧑‍🏫',
	'👨‍🏫',
	'👩‍🏫',
	'🧑‍⚖️',
	'👨‍⚖️',
	'👩‍⚖️',
	'🧑‍🌾',
	'👨‍🌾',
	'👩‍🌾',
	'🧑‍🍳',
	'👨‍🍳',
	'👩‍🍳',
	'🧑‍🔧',
	'👨‍🔧',
	'👩‍🔧',
	'🧑‍🏭',
	'👨‍🏭',
	'👩‍🏭',
	'🧑‍💼',
	'👨‍💼',
	'👩‍💼',
	'🧑‍🔬',
	'👨‍🔬',
	'👩‍🔬',
	'🧑‍💻',
	'👨‍💻',
	'👩‍💻',
	'🧑‍🎤',
	'👨‍🎤',
	'👩‍🎤',
	'🧑‍🎨',
	'👨‍🎨',
	'👩‍🎨',
	'🧑‍✈️',
	'👨‍✈️',
	'👩‍✈️',
	'🧑‍🚀',
	'👨‍🚀',
	'👩‍🚀',
	'🧑‍🚒',
	'👨‍🚒',
	'👩‍🚒',
	'👮',
	'👮‍♂️',
	'👮‍♀️',
	'🕵️',
	'🕵️‍♂️',
	'🕵️‍♀️',
	'💂',
	'💂‍♂️',
	'💂‍♀️',
	'👷',
	'👷‍♂️',
	'👷‍♀️',
	'🤴',
	'👸',
	'👳',
	'👳‍♂️',
	'👳‍♀️',
	'👲',
	'🧕',
	'🤵',
	'🤵‍♂️',
	'🤵‍♀️',
	'👰',
	'👰‍♂️',
	'👰‍♀️',
	'🤰',
	'🤱',
	'👩‍',
	'🍼',
	'👨‍',
	'🍼',
	'🧑‍',
	'🍼',
	'👼',
	'🎅',
	'🤶',
	'🧑‍',
	'🎄',
	'🦸',
	'🦸‍♂️',
	'🦸‍♀️',
	'🦹',
	'🦹‍♂️',
	'🦹‍♀️',
	'🧙',
	'🧙‍♂️',
	'🧙‍♀️',
	'🧚',
	'🧚‍♂️',
	'🧚‍♀️',
	'🧛',
	'🧛‍♂️',
	'🧛‍♀️',
	'🧜',
	'🧜‍♂️',
	'🧜‍♀️',
	'🧝',
	'🧝‍♂️',
	'🧝‍♀️',
	'🧞',
	'🧞‍♂️',
	'🧞‍♀️',
	'🧟',
	'🧟‍♂️',
	'🧟‍♀️',
	'💆',
	'💆‍♂️',
	'💆‍♀️',
	'💇',
	'💇‍♂️',
	'💇‍♀️',
	'🚶',
	'🚶‍♂️',
	'🚶‍♀️',
	'🧍',
	'🧍‍♂️',
	'🧍‍♀️',
	'🧎',
	'🧎‍♂️',
	'🧎‍♀️',
	'🧑‍',
	'🦯',
	'👨‍',
	'🦯',
	'👩‍',
	'🦯',
	'🧑‍',
	'🦼',
	'👨‍',
	'🦼',
	'👩‍',
	'🦼',
	'🧑‍',
	'🦽',
	'👨‍',
	'🦽',
	'👩‍',
	'🦽',
	'🏃',
	'🏃‍♂️',
	'🏃‍♀️',
	'💃',
	'🕺',
	'🕴️',
	'👯',
	'👯‍♂️',
	'👯‍♀️',
	'🧖',
	'🧖‍♂️',
	'🧖‍♀️',
	'🧗',
	'🧗‍♂️',
	'🧗‍♀️',
	'🤺',
	'🏇',
	'⛷️',
	'🏂️',
	'🏌️',
	'🏌️‍♂️',
	'🏌️‍♀️',
	'🏄️',
	'🏄‍♂️',
	'🏄‍♀️',
	'🚣',
	'🚣‍♂️',
	'🚣‍♀️',
	'🏊️',
	'🏊‍♂️',
	'🏊‍♀️',
	'⛹️',
	'⛹️‍♂️',
	'⛹️‍♀️',
	'🏋️',
	'🏋️‍♂️',
	'🏋️‍♀️',
	'🚴',
	'🚴‍♂️',
	'🚴‍♀️',
	'🚵',
	'🚵‍♂️',
	'🚵‍♀️',
	'🤸',
	'🤸‍♂️',
	'🤸‍♀️',
	'🤼',
	'🤼‍♂️',
	'🤼‍♀️',
	'🤽',
	'🤽‍♂️',
	'🤽‍♀️',
	'🤾',
	'🤾‍♂️',
	'🤾‍♀️',
	'🤹',
	'🤹‍♂️',
	'🤹‍♀️',
	'🧘',
	'🧘‍♂️',
	'🧘‍♀️',
	'🛀',
	'🛌',
	'🧑‍',
	'🤝‍',
	'🧑',
	'👭',
	'👫',
	'👬',
	'💏',
	'👩‍❤️‍💋‍👨',
	'👨‍❤️‍💋‍👨',
	'👩‍❤️‍💋‍👩',
	'💑',
	'👩‍❤️‍👨',
	'👨‍❤️‍👨',
	'👩‍❤️‍👩',
	'👪️',
	'👨‍👩‍👦',
	'👨‍👩‍👧',
	'👨‍👩‍👧‍👦',
	'👨‍👩‍👦‍👦',
	'👨‍👩‍👧‍👧',
	'👨‍👨‍👦',
	'👨‍👨‍👧',
	'👨‍👨‍👧‍👦',
	'👨‍👨‍👦‍👦',
	'👨‍👨‍👧‍👧',
	'👩‍👩‍👦',
	'👩‍👩‍👧',
	'👩‍👩‍👧‍👦',
	'👩‍👩‍👦‍👦',
	'👩‍👩‍👧‍👧',
	'👨‍👦',
	'👨‍👦‍👦',
	'👨‍👧',
	'👨‍👧‍👦',
	'👨‍👧‍👧',
	'👩‍👦',
	'👩‍👦‍👦',
	'👩‍👧',
	'👩‍👧‍👦',
	'👩‍👧‍👧',
	'🗣️',
	'👤',
	'👥',
	'👣',
];
