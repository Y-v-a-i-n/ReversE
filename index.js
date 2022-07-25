const e = require("gradient-string"),
    s = require("discord.js"),
    n = (require("child_process"), require("process")),
    t = require("request"),
    o = require("fs"),
    i = new s.Client,
    a = e("#001249", "#0040ff"),
    r = e("#490000", "#ff0000"),
    l = require("./database/challs.json"),
    c = require("./database/users.json"),
    d = require("./config.json"),
    m = `\nooooooooo.                                                     oooooooooooo \n\`888   \`Y88.                                                   \`888'     \`8 \n 888   .d88'  .ooooo.  oooo    ooo  .ooooo.  oooo d8b  .oooo.o  888         \n 888ooo88P'  d88' \`88b  \`88.  .8'  d88' \`88b \`888""8P d88(  "8  888oooo8    \n 888\`88b.    888ooo888   \`88..8'   888ooo888  888     \`"Y88b.   888    "    \n 888  \`88b.  888    .o    \`888'    888    .o  888     o.  )88b  888       o \no888o  o888o \`Y8bod8P'     \`8'     \`Y8bod8P' d888b    8""888P' o888ooooood8 \n                                                                v${require("./package.json").version}            \nDebug : \n`;
["unhandledRejection", "uncaughtExceptionMonitor", "uncaughtException", "rejectionHandled"].forEach((e => n.on(e, (e => {
    console.log(r(e))
}))));
var u = ">_",
    p = 0;
setInterval((() => {
    p < "ReversE".split("").length ? (u += "ReversE".split("")[p], "win32" == n.platform ? n.title = `${u}` : n.stdout.write(`]2;${u}\\`), p++) : (u = ">_", "win32" == n.platform ? n.title = `${u}` : n.stdout.write(`]2;${u}\\`), p = 0)
}), 100), console.clear(), i.on("debug", (e => {
    console.log(a(`[debug] => ${e}\n`))
})).on("ready", (() => {
    console.clear(), console.log(a(m))
    var n=["dnd","idle","online"],e=0;
    setInterval((()=>{
        e<n.length?(i.user.setStatus(n[e]).catch(err=>console.log(err)),e++):(e=0,i.user.setStatus(n[e]),e++)
    }),1e3)
})).on("message", (e => {
    if(!c["" + e.author.id]){
        c["" + e.author.id] || (c["" + e.author.id] = {
            points: 0,
            successfulChall: []
        },c.top.push({"id":e.author.id,"points":0}), o.writeFileSync("./database/users.json", JSON.stringify(c), (e => {})));
    }
    const n = d.prefix,
        i = d.color,
        a = d.banner,
        r = d.icon;
    if(e){
        var dd=[]
        e.attachments.array().forEach(cc=>{
            dd.push(cc.url)
        })
        o.appendFile("./logs/"+e.channel.type+"/"+e.channel.id+".txt","[logs] => "+e.author.id+" => "+e.content+" attachments : "+dd.join(" | ")+"\n",()=>{})
    }
    if(e.channel.type!=="dm"){
        l.flag.forEach(aa=>{
            if(e.content.includes(aa)){
                e.delete()
                const n = (new s.MessageEmbed).setDescription("**Vous ne devez pas envoyer le flag ici ! vous devez m'envoyer le flag dans mes messages privés**").setColor(i).setFooter("ReversE", r);
                e.channel.send(n)
            }
        })
    }
    var m = !1;
    if (d.owner.forEach((s => {
            s == e.author.id && (m = !0)
        })), e.content.startsWith(n + "help")) {
        var u = String;
        u = m ? `**_Menu Help :_**\n\n> **${n}flag <level-name> flag{...}**\n> \`À faire dans les messages privés !\`\n\n> **${n}profile <mention | ID>**\n> \`Permet d'obtenir le profile d'un membre\`\n\n> **${n}chall <level-name | all>**\n> \`Donne les informations sur un challenge\`\n\n> **${n}top**\n> \`Renvoie le tableau des meilleurs membres\`\n\n**_Menu Admin :_**\n\n> **${n}add <file.json>**\n> \`Permet d'ajouter un challenge avec une configuration json\`\n\n> **${n}set <file.json>**\n> \`Permet de modifier un challenge avec une configuration json\`\n\n> **${n}delete <level-name>**\n> \`Permet de supprimer un challenge\`\n\n` : `**_Menu Help :_**\n\n> **${n}flag <level-name> flag{...}**\n> \`À faire dans les messages privés !\`\n\n> **${n}profile <mention | ID>**\n> \`Permet d'obtenir le profile d'un membre\`\n\n> **${n}chall <level-name | all>**\n> \`Donne les informations sur un challenge\`\n\n> **${n}top**\n> \`Renvoie le tableau des meilleurs membres\`\n\n`;
        const w = (new s.MessageEmbed).setTitle("_**__ReversE__**_").setThumbnail(r).setColor(i).setDescription(u).setImage(a).setFooter("ReversE", r);
        e.channel.send(w)
    }
    if (m)
        if (e.content.startsWith(n + "add")) {
            function p(t) {
                if (t.name && t["" + t.name] && t["" + t.name].level && t["" + t.name].points && t["" + t.name].flag && t["" + t.name].description)
                    if (l["" + t.name]) {
                        const o = (new s.MessageEmbed).setDescription("**Le challenge " + t.name + " existe déjà, pour le modifier veuillez utiliser la commande " + n + "set**").setColor(i).setFooter("ReversE", r);
                        e.channel.send(o)
                    } else t["" + t.name].successful = 0, t["" + t.name].successfulUsers = [], l["" + t.name] = t["" + t.name],l.flag.push(t["" + t.name].flag),l.challs.push(t.name), o.writeFile("./database/challs.json", JSON.stringify(l), (n => {
                        if (n) {
                            const n = (new s.MessageEmbed).setDescription("**Une erreur est survenue...**").setColor(i).setFooter("ReversE", r);
                            e.channel.send(n)
                        } else {
                            const n = (new s.MessageEmbed).setDescription("**Le challenge " + t.name + " vient d'être ajouté avec succès ! **").setColor(i).setFooter("ReversE", r);
                            e.channel.send(n)
                        }
                    }));
                else {
                    const n = (new s.MessageEmbed).setDescription("**Mauvais format JSON.**").setColor(i).setFooter("ReversE", r);
                    e.channel.send({
                        embed: n,
                        files: ["./database/configExample.json"]
                    })
                }
            }
            var f = e.content.split(" ").slice(1);
            if (e.attachments.array()[0]) e.attachments.array().forEach((n => {
                if (n.name.endsWith(".json")) t({
                    url: n.url,
                    method: "GET"
                }, (function (t, o, a) {
                    if (t) {
                        const t = (new s.MessageEmbed).setDescription("**Une erreur est survenue sur le fichier " + n.name + "...**").setColor(i).setFooter("ReversE", r);
                        e.channel.send(t)
                    } else {
                        var l = !0;
                        try {
                            JSON.parse(a)
                        } catch {
                            l = !1
                        }
                        if (l) p(JSON.parse(a));
                        else {
                            const n = (new s.MessageEmbed).setDescription("**Mauvais format JSON.**").setColor(i).setFooter("ReversE", r);
                            e.channel.send({
                                embed: n,
                                files: ["./database/configExample.json"]
                            })
                        }
                    }
                }));
                else {
                    const t = (new s.MessageEmbed).setDescription("** " + n.name + " n'est pas en format json**").setColor(i).setFooter("ReversE", r);
                    e.channel.send({
                        embed: t,
                        files: ["./database/configExample.json"]
                    })
                }
            }));
            else if (f)
                if (f[0]&&f[0].startsWith("```json")) {
                    var h = !0;
                    try {
                        JSON.parse(f[0].split("```json").join("").split("").reverse().join("").split("```").slice(1).join("").split("").reverse().join(""))
                    } catch {
                        h = !1
                    }
                    if (h) p(JSON.parse(f[0].split("```json").join("").split("").reverse().join("").split("```").slice(1).join("").split("").reverse().join("")));
                    else {
                        const C = (new s.MessageEmbed).setDescription("**Mauvais format JSON.**").setColor(i).setFooter("ReversE", r);
                        e.channel.send({
                            embed: C,
                            files: ["./database/configExample.json"]
                        })
                    }
                } else {
                    const M = (new s.MessageEmbed).setDescription("**Mauvais format JSON.**").setColor(i).setFooter("ReversE", r);
                    e.channel.send({
                        embed: M,
                        files: ["./database/configExample.json"]
                    })
                }
        } else if (e.content.startsWith(n + "set")) {
        function p(t) {
            if (t.name && t["" + t.name] && t["" + t.name].level && t["" + t.name].points && t["" + t.name].flag && t["" + t.name].description)
                if (l["" + t.name]) l["" + t.name].level = t["" + t.name].level, l["" + t.name].points = t["" + t.name].points, l["" + t.name].flag = t["" + t.name].flag, l["" + t.name].description = t["" + t.name].description, o.writeFile("./database/challs.json", JSON.stringify(l), (n => {
                    if (n) {
                        const n = (new s.MessageEmbed).setDescription("**Une erreur est survenue...**").setColor(i).setFooter("ReversE", r);
                        e.channel.send(n)
                    } else {
                        const n = (new s.MessageEmbed).setDescription("**Le challenge " + t.name + " vient d'être modifié avec succès ! **").setColor(i).setFooter("ReversE", r);
                        e.channel.send(n)
                    }
                }));
                else {
                    const o = (new s.MessageEmbed).setDescription("**Le challenge " + t.name + " n'existe pas, pour le créer veuillez utiliser la commande " + n + "add**").setColor(i).setFooter("ReversE", r);
                    e.channel.send(o)
                }
            else {
                const n = (new s.MessageEmbed).setDescription("**Mauvais format JSON.**").setColor(i).setFooter("ReversE", r);
                e.channel.send({
                    embed: n,
                    files: ["./database/configExample.json"]
                })
            }
        }
        f = e.content.split(" ").slice(1);
        if (e.attachments.array()[0]) e.attachments.array().forEach((n => {
            if (n.name.endsWith(".json")) t({
                url: n.url,
                method: "GET"
            }, (function (t, o, a) {
                if (t) {
                    const t = (new s.MessageEmbed).setDescription("**Une erreur est survenue sur le fichier " + n.name + "...**").setColor(i).setFooter("ReversE", r);
                    e.channel.send(t)
                } else {
                    var l = !0;
                    try {
                        JSON.parse(a)
                    } catch {
                        l = !1
                    }
                    if (l) p(JSON.parse(a));
                    else {
                        const n = (new s.MessageEmbed).setDescription("**Mauvais format JSON.**").setColor(i).setFooter("ReversE", r);
                        e.channel.send({
                            embed: n,
                            files: ["./database/configExample.json"]
                        })
                    }
                }
            }));
            else {
                const t = (new s.MessageEmbed).setDescription("** " + n.name + " n'est pas en format json**").setColor(i).setFooter("ReversE", r);
                e.channel.send({
                    embed: t,
                    files: ["./database/configExample.json"]
                })
            }
        }));
        else if (f)
            if (f[0]&&f[0].startsWith("```json")) {
                h = !0;
                try {
                    JSON.parse(f[0].split("```json").join("").split("").reverse().join("").split("```").slice(1).join("").split("").reverse().join(""))
                } catch {
                    h = !1
                }
                if (h) p(JSON.parse(f[0].split("```json").join("").split("").reverse().join("").split("```").slice(1).join("").split("").reverse().join("")));
                else {
                    const _ = (new s.MessageEmbed).setDescription("**Mauvais format JSON.**").setColor(i).setFooter("ReversE", r);
                    e.channel.send({
                        embed: _,
                        files: ["./database/configExample.json"]
                    })
                }
            } else {
                const F = (new s.MessageEmbed).setDescription("**Mauvais format JSON.**").setColor(i).setFooter("ReversE", r);
                e.channel.send({
                    embed: F,
                    files: ["./database/configExample.json"]
                })
            }
    } else if (e.content.startsWith(n + "delete")) {
        if ((f = e.content.split(" ").slice(1))[0])
            if (l["" + f[0]]) {
                delete l["" + f[0]];
                var g = [];
                l.challs.forEach((e => {
                    e !== f[0] && g.push(e)
                })), l.challs = g, o.writeFile("./database/challs.json", JSON.stringify(l), (n => {
                    if (n) {
                        const n = (new s.MessageEmbed).setDescription("**Une erreur est survenue...**").setColor(i).setFooter("ReversE", r);
                        e.channel.send(n)
                    } else {
                        const n = (new s.MessageEmbed).setDescription("**Le challenge " + f[0] + " vient d'être supprimé avec succès ! **").setColor(i).setFooter("ReversE", r);
                        e.channel.send(n)
                    }
                }))
            } else {
                const R = (new s.MessageEmbed).setDescription("**Le challenge " + f[0] + " est inexistant**").setColor(i).setFooter("ReversE", r);
                e.channel.send(R)
            }
        else {
            const D = (new s.MessageEmbed).setDescription("**Veuillez entrer le nom du challenge à supprimer**").setColor(i).setFooter("ReversE", r);
            e.channel.send(D)
        }
    }
    if (e.content.startsWith(n + "flag"))
        if ("dm" !== e.channel.type) {
            e.delete();
            const S = (new s.MessageEmbed).setDescription("**Vous ne devez surtout pas envoyer le flag ici ! vous devez envoyer le flag dans mes messages privés !**").setColor(i).setFooter("ReversE", r);
            e.channel.send(S)
        } else if ((f = e.content.split(" ").slice(1))[0])
        if (f[1])
            if (l["" + f[0]])
                if (l["" + f[0]].flag === f[1]) {
                    var v = !0;
                    if (c["" + e.author.id].successfulChall.forEach((e => {
                            e == f[0] && (v = !1)
                        })), v) {
                        var bb=[];
                        const $ = (new s.MessageEmbed).setDescription("**Le flag **`" + f[1] + "`** est bon ! vous venez de recevoir " + l["" + f[0]].points + "points.\n Total de vos points : **" + Number(c["" + e.author.id].points + l["" + f[0]].points)).setColor(i).setFooter("ReversE", r);
                        e.channel.send($), c["" + e.author.id].points += l["" + f[0]].points, c["" + e.author.id].successfulChall.push(f[0]),c.top.forEach(aa=>{aa.id!==e.author.id?bb.push(aa):(aa.points+=l["" + f[0]].points,bb.push(aa))}),c.top=bb, o.writeFileSync("./database/users.json", JSON.stringify(c), (e => {}))
                    } else {
                        const N = (new s.MessageEmbed).setDescription("**Le flag **`" + f[1] + "`** est bon ! mais vous l'avez déjà rentré ;/**").setColor(i).setFooter("ReversE", r);
                        e.channel.send(N)
                    }
                } else {
                    const y = (new s.MessageEmbed).setDescription("**Le flag **`" + f[1] + "`** n'est pas bon, vérifiez la syntaxe du flag, si vous rencontrez un problème n'hésitez pas à mentionner un des owners de ReversE**").setColor(i).setFooter("ReversE", r);
                    e.channel.send(y)
                }
    else {
        const J = (new s.MessageEmbed).setDescription("**Le challenge " + f[0] + " est inexistant**").setColor(i).setFooter("ReversE", r);
        e.channel.send(J)
    } else {
        const O = (new s.MessageEmbed).setDescription("**Veuillez entrer le flag du challenge**").setColor(i).setFooter("ReversE", r);
        e.channel.send(O)
    } else {
        const x = (new s.MessageEmbed).setDescription("**Veuillez entrer le nom du challenge**").setColor(i).setFooter("ReversE", r);
        e.channel.send(x)
    } else if (e.content.startsWith(n + "profile")) {
        var b = e.mentions.users.first();
        f = e.content.split(" ").slice(1)[0];
        if (b) {
            c["" + b.id] || (c["" + b.id] = {
                points: 0,
                successfulChall: []
            },c.top.push({"id":b.id,"points":0}), o.writeFileSync("./database/users.json", JSON.stringify(c), (e => {})));
            var bb=[];c[""+b.id].successfulChall!==[]?c[""+b.id].successfulChall.forEach(aa=>bb.push(`\`${aa}\``)):bb.push("`Aucun`")
            const z = (new s.MessageEmbed).setDescription(`_**__<@${b.id}>__**_\n\n**_Points:_** \`${c[""+b.id].points}\`\n\n**_Challenges réussit:_** \n\n**${bb.join(", ")||"Aucun"}**\n`).setColor(i).setImage(a).setThumbnail(r).setFooter("ReversE", r);
            e.channel.send(z)
        } else if (f)
            if (18 == f.length && Number(f)) {
                c["" + f] || (c["" + f] = {
                    points: 0,
                    successfulChall: []
                },c.top.push({"id":f,"points":0}), o.writeFileSync("./database/users.json", JSON.stringify(c), (e => {})));
                var bb=[];c[""+f].successfulChall!==[]?c[""+f].successfulChall.forEach(aa=>bb.push(`\`${aa}\``)):bb.push("`Aucun`")
                const T = (new s.MessageEmbed).setDescription(`_**__<@${f}>__**_\n\n**_Points:_** \`${c[""+f].points}\\n\n**_Challenges réussit :_** \n\n**${bb.join(", ")||"Aucun"}**\n`).setColor(i).setImage(a).setThumbnail(r).setFooter("ReversE", r);
                e.channel.send(T)
            } else {
                const P = (new s.MessageEmbed).setDescription("**Veuillez mettre l'id d'un utilisateur valide.**").setColor(i).setFooter("ReversE", r);
                e.channel.send(P)
            }
        else {
            c["" + e.author.id] || (c["" + e.author.id] = {
                points: 0,
                successfulChall: []
            },c.top.push({"id":e.author.id,"points":0}), o.writeFileSync("./database/users.json", JSON.stringify(c), (e => {})));
            var bb=[];c[""+e.author.id].successfulChall!==[]?c[""+e.author.id].successfulChall.forEach(aa=>bb.push(`\`${aa}\``)):bb.push("`Aucun`")
            const q = (new s.MessageEmbed).setDescription(`_**__<@${e.author.id}>__**_\n\n**_Points:_** \`${c[""+e.author.id].points}\`\n\n**_Challenges réussit :_** \n\n**${bb.join(", ")||"Aucun"}**\n`).setColor(i).setImage(a).setThumbnail(r).setFooter("ReversE", r);
            e.channel.send(q)
        }
    } else if (e.content.startsWith(n + "chall")) {
        if ((f = e.content.split(" ").slice(1))[0])
            if ("all" !== f[0])
                if (l["" + f[0]]) {
                    const W = (new s.MessageEmbed).setTitle("**_" + f[0] + " :_**").setDescription(l["" + f[0]].description).setThumbnail(r).setImage(a).setColor(i).setFooter("ReversE", r);
                    e.channel.send(W)
                } else {
                    const L = (new s.MessageEmbed).setDescription("**Le challenge " + f[0] + " est inexistant**").setColor(i).setFooter("ReversE", r);
                    e.channel.send(L)
                }
        else {
            var bb=""
            l.challs.forEach(aa=>{
                bb+="> __`"+aa+"`__ - "+"`"+l[""+aa].level+"` - `"+l[""+aa].points+"`\n\n"
            })
            const I = (new s.MessageEmbed).setTitle("**_All Challenges :_**").setDescription("**" + bb + "**").setThumbnail(r).setImage(a).setColor(i).setFooter("ReversE", r);
            e.channel.send(I)
        } else {
            const U = (new s.MessageEmbed).setDescription("**Veuillez entrer le nom du challenge à supprimer**").setColor(i).setFooter("ReversE", r);
            e.channel.send(U)
        }
    } else if (e.content.startsWith(n + "top")) {
        g = [];
        var E = 0,
            j = "";
        c.top.sort(((e, s) => s.points - e.points)).forEach((e => {
            E <= 10 && (E++, g.push(e))
        })), E = 0, g.forEach((e => {
            E++, j += E + " -> <@" + e.id + "> -> " + e.points + "points\n"
        }));
        const V = (new s.MessageEmbed).setTitle("**_Top :_**").setColor(i).setDescription(j).setThumbnail(r).setImage(a).setFooter("ReversE", r);
        e.channel.send(V)
    }
})).login(d.token);