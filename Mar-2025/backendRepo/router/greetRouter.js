import {Router} from 'express'


const router = Router()


router.get('/greet', async(req, res) => {
    res.send("How una dey")
})

export default router