import UserModel from '../model/userModel.js'
const homeController=async(req,res)=>{
   try {
    

      res.render('index')
   } catch (error) {
      console.log(error.message)
   }
  
}
const ContactUserController=async(req,res)=>{
   try {
     
      const data=await UserModel({
         name:req.body.name,
         email:req.body.email,
         subject:req.body.subject,
         message:req.body.message
      })

       if(data){
         await data.save()
         console.log("USER SAVED")
       }
      res.render('index')
   } catch (error) {
      console.log(error.message)
      
   }
}
export {homeController,ContactUserController}