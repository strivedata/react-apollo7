FORMAT: 1A
HOST: http://localhost:7777/

# react-apollo7-api-blueprint
Mock API for the react-apollo7 starter.

## Authentication [/auth/token]

### ACCESS-TOKEN [POST]
Provides a mock access token for demonstration purpose.

+ Request (application/x-www-form-urlencoded)

        username=demo&password=demo&remember=true&grant_type=password


+ Response 201 (application/json)


    + Body

            {
                "access_token":"1112c7e71f407698a8daeb1782222",
                "token_type":"Bearer",
                "expires_in":7777777,
                "expiry_date": "2077-07-14T12:31:29.000Z"
            }

## User [/user/profile]

### Profile [GET]


+ Response 200 (application/json)

            {
                "id": "01c9832b74ff90300e190ae",
                "username": "Donn Eisele",
                "email": "ak@mission.apollo7",
                "avatarURL": ""
            }


## Crew Collection [/crew]

### List All Crew Members [GET]


+ Response 200 (application/json)

               [
                           {
                              "id": "01c4838b74ff90300e190ae",
                              "name": "Walter Schirra",
                              "image": "http://strive.agency/public/wally.png",
                              "space_time": "12d 7h 12m",
                              "position": "Commander"
                           },
                           {
                              "id": "02c4838b74ff90300e190ae",
                              "name": "Donn Eisele",
                              "image": "http://strive.agency/public/donn.png",
                              "space_time": "10d 20h 08m",
                              "position": "Commander Module Pilot"
                           },
                           {
                              "id": "03c4838b74ff90300e190ae",
                              "name": "Walter Cunningham",
                              "image": "http://strive.agency/public/walter.png",
                              "space_time": "10d 20h 08m",
                              "position": "Lunar Module Pilot"
                           },
                           {
                              "id": "04c4838b74ff90300e190ae",
                              "name": "John Watts Young",
                              "image": "http://strive.agency/public/john.png",
                              "space_time": "34d 19h 39m",
                              "position": "Backup Command Module Pilot"
                           }
                ]
