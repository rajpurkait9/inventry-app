const checkRouteBody = function(arg){
    return (req,res,next)=>{
        const leftOver = [];
        arg.forEach(e=>{
            if(!req.body[e]) leftOver.push(e);
        })
         if(leftOver.length > 0) return res.status(400).send(`${leftOver.join(',')} fields are required..`);
         next()
    }
}

module.exports = checkRouteBody;
