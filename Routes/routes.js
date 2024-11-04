const express=require('express')

const userController=require('../Controllers/userController')
const studentController=require('../Controllers/studentController')



const jwtmiddle=require('./Middleware/jwtMiddleware')
const multerInstance=require('../Middleware/multerConfig')



const router=express.Router()

router.post('/reg',userController.userRegistration)
router.post('/log',userController.userLogin)

router.post('/addstudent',jwtmiddle,multerInstance.single('image'))
router.get('/getStudents',jwtmiddle,studentController.getStudents)
router.delete('/deletestudent/:sid',jwtmiddle,studentController.deleteStudent )


module.exports=router