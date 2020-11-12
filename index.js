const Discord = require('discord.js');
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.on('ready', function() {   

    console.log('어몽어스 봇 구동 완료!');
    client.user.setActivity('모든 우주선 | 접두사: .')
});

// 서버 입장 메시지
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '775898212103094273');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#00FF00')
      .setDescription(`${member} 님이 **\`어몽어스 코리아 디스코드\`** 서버에 입장하셨습니다`)
      channel.send(embed)
    });

// 서버 퇴장 메시지
client.on('guildMemberRemove', member => {
    const channel = member.guild.channels.cache.find(ch => ch.id === '775898212103094273');
    if(!channel) return;
    const embed = new Discord.MessageEmbed()
      .setColor('#FF0000')
      .setDescription(`${member} 님이 **\`어몽어스 코리아 디스코드\`** 서버를 퇴장하셨습니다`)
      channel.send(embed)
  });

// 리액션 역할 추가
client.on('messageReactionAdd', async (reaction, user) => {
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Red") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('765381107486031902')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Orange") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901498503594015')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Yellow") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901501456908328')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Green") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901505651867688')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Lime") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901508284710923')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Blue") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901511083098112')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Cyan") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901513566257172')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Purple") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901515960549407')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Pink") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901519358197770')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "White") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901522437210152')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Brown") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901525159444481')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Black") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.add('775901527910383647')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
})

// 리액션 역할 삭제
client.on('messageReactionRemove', async (reaction, user) => {
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Red") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('765381107486031902')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Orange") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901498503594015')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Yellow") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901501456908328')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Green") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901505651867688')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Lime") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901508284710923')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Blue") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901511083098112')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Cyan") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901513566257172')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Purple") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901515960549407')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Pink") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901519358197770')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "White") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901522437210152')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Brown") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901525159444481')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
    try {
        if(reaction.message.id === '775914131604897803') {
            await reaction.fetch()
            if(reaction._emoji.name === "Black") {
                reaction.message.guild.members.fetch(user.id).then(member => {
                    member.roles.remove('775901527910383647')
                })
            }
        }
    } catch (error) {
        console.log(error)
    }
})

//메시지 수정
client.on('messageUpdate', async(oldMessage, newMessage) => {
  if(oldMessage.content === newMessage.content) return // 임베드로 인한 수정같은 경우 
  const channel = client.channels.cache.find(channel => channel.id === '776592745954541578')
  const user = oldMessage.mentions.users.first() || oldMessage.author;
  const embed = new Discord.MessageEmbed()
  .setTitle('📝 수정 로그')
  .setColor('#6E81EE')
  .setDescription(`<@!${oldMessage.author.id}> 님께서 메시지를 수정하셨습니다`)
  .addFields(
    { name: '수정 전', value: `\`${oldMessage.content}\``, inline: true },
    { name: '수정 후', value: `\`${newMessage.content}\``, inline: true }
)
  .setTimestamp()
  .setFooter(user.username, user.displayAvatarURL())
  channel.send(embed)
})

//메시지 삭제
client.on('messageDelete', async message => {
    const user = message.author.id
    const user1 = message.mentions.users.first() || message.author;
    const channel = client.channels.cache.find(channel => channel.id === '776592745954541578')
    const embed = new Discord.MessageEmbed()
    .setTitle('❌ 삭제 로그')
    .setColor('#FF0000')
    .setDescription(`<@!${user}> 님이 \`${message.content}\` 을(를) 삭제하셨습니다`)
    .setTimestamp()
    .setFooter(user1.username, user1.displayAvatarURL())
    channel.send(embed)
});

client.login("NzU5NjIwODc1ODMzNDQyMzI2.X3AKEQ.3aNh3OPPuj5khCDSifOtqI0tTBA");