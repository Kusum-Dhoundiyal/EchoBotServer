 const sendMessage= (req)=>{
     let message ={ 
            isBotReply: true,
            msg: req.body.message
        }
    return message;
}

module.exports={sendMessage};