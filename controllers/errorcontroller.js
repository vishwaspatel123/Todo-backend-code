exports.pagenotfound = (req,res,next) =>{
  res.status(404).json({message : "page not found"})
}