const help = (prefix) => {
	return `> *Comandos de Figurinhas* <
command : *${prefix}sticker* or *${prefix}stiker*
desc : converter imagem / gif / vídeo em sticker
usage : reply image/gif/video, or send image/gif/video with caption\n
command : *${prefix}toimg*
desc : converter sticker em imagem
usage : reply sticker\n
> *Outros Comandos* <
command : *${prefix}gtts*
desc : converter texto em fala / áudio
usage : *${prefix}gtts [cc] [text]*\nexample : *${prefix}gtts ja On2-chan*\n
command : *${prefix}setprefix*
desc : substituir prefixo
usage : *${prefix}setprefix [text|optional]*\nexample : *${prefix}setprefix ?*
note : este comando só pode ser usado pelo proprietário do bot\n
> *Comandos de Grupo* <
command : *${prefix}kick*
desc : banir membros do grupo
usage : *${prefix}kick @tagmember*\n
note : só pode ser usado quando o bot se torna admin, e quem envia o comando é adm\n
command : *${prefix}simih*
desc : ative o modo simi no grupo
usage : *${prefix}simih 1* to activate simi mode and *${prefix}simih 0* to deactivate simi mode
note : este comando pode ser usado se você for um administrador de grupo\n`
}

exports.help = help
