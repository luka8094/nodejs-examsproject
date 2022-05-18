import database from "../../database/connection/dbConnection"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
//import { generateAccessToken } from "../../utilities/verify/authentication"

//Note!: refreshtokens should actually be stored in a persistent state
//this is for practical educational purposes only
export let refreshTokens = []

//login ☑️
export async function login(req, res) {
        const user = {
            name: req.body.name,
            password: req.body.password
        }
        //does the user even exist?
        const findUser = await database.get(`SELECT * FROM users WHERE name = ?;`,
            [user.name])

        //the user was not found in the database
        if (findUser === undefined) res.status(400).send('bad request')

        if (await bcrypt.compare(user.password, findUser.password)) {
            //serialize user with access token
            const accessToken = generateAccessToken(user)
            //refresh the access token for the user
            const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
            //save the refreshToken
            refreshTokens.push(refreshToken)
            //permit access ("at" : "access token", "rt" : "refresh token", "msg" : "message" )
            res.status(202).send({data: {at: accessToken, rt: refreshToken, msg: "access granted" } })
        } else {
            //deny access
            res.status(401).send({data: "access denied" })
        }
}

export async function token(req, res){
        //grab the refresh token from the incoming json body
        const refreshToken = req.body.token
    
        //is the refresh token empty?
        if(refreshToken === null) return res.status(401).send("unauthorized")
        //does the refresh token even exist?
        if(!refreshTokens.includes(refreshToken)) return res.status(401).send("unauthorized")
    
        //if its passed all the initial evaluation gates, verify it
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) =>{
            //catch a potential error and forbid retrieval
            if(err) return res.status(403).send("forbidden")
    
            //if everything checks out - regenerate the access token
            //const accessToken = generateAccessToken({user: user.name})
    
            res.send({data : {at : accessToken}})
        })
}

//logout ☑️
export async function logout(req, res) {
        refreshTokens = refreshTokens.filter(refreshToken => refreshToken !== req.body.token)
        res.status(204).send({data: {msg: "token removed"}})
}   
