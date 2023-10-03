const express=require('express')
const app=express()/* It returns a web server.*/
const port =3000
function func()
{
    console.log("The server is listening to port 3000")
}
var students=["alice","bob"]
app.get('/1',(req,res)=>/*call back function => */
{
    res.send("Hello World1")
})
app.get('/2',(req,res)=>
{
    res.send("Hello World2")
})
app.get('/students',(req,res)=>{
    res.send(students)
})
app.post('/addstudent',(req,res)=>
{
    const student=req.query.studentname
    console.log(student)
    students.push(student)
    res.sendStatus(200)
})
app.listen(port,()=>
{
    console.log(`Listenning to the port ${port}`)
})