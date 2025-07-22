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

- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

userRouter

- GET /user/connections
- GET /user/requests/received
- GET /user/feed -> gets other user's profile

Status : ignore,interested,accepted,rejected
