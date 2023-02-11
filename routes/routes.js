const { request, response } = require('express')
const express = require('express')
const router = express.Router()
const volunteerTempletCopy = require('../models/VolunteerModels')

router.post('/signup',(request,response) =>{

        const volunteerUser = new volunteerTempletCopy({
            name:request.body.name,
            evente:request.body.evente,
            email:request.body.email,
            mobile:request.body.mobile
        })
            volunteerUser.save()
            .then(data=>{
                response.json(data)
            })
            .catch(error=>{
                response.json(error)
            })
})

module.exports = router