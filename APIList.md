# MatchIQ api's

authRouter

- POST /signUp
- POST /login
- POST /logout

profileRouter

- PATCH /profile/view
- GET /profile/edit
- PATCH /profile/password

connectionRouter

- POST /request/send/:status/:userId
- POST /request/review/:status/:requestId

userRouter

- GET /user/connections
- GET /user/requests/received
- GET /user/feed -> gets other user's profile

Status : ignore,interested,accepted,rejected
