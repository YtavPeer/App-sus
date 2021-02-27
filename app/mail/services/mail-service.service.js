import { utilService } from '../../service/utils-service.js'
import { storageService } from '../../service/async-storage-service.js'

const EMAIL_KEY = 'emails'
const gEmails = _createEmails()

export const emailService = {
    query,
    getById,
    add,
    update,
    remove
}

//pseudo
const mail = {
    id: utilService.makeId(),
    sender: 'michael@coding.com',
    nickname: 'michael',
    receiver: 'asdads',
    subject: 'Hi',
    body: 'message',
    isRead: false,
    isStarred: false,
    sendAt: 1614240148296
}

// const users = [
//     {nickname: 'Michael', mail: 'michael@coding.com'},  {nickname: 'Ytav', mail: 'ytav@coding.com'},   {nickname: 'Puku', mail: 'puki@coding.com'}]

function getById(id) {
    console.log(id)
    return storageService.get(EMAIL_KEY, id)
}

function query() {
    return storageService.query(EMAIL_KEY)
        .then(emails => {
            console.log(emails, "storage emails")
            let emailsToReturn = emails
            if (!emailsToReturn.length) {
                emailsToReturn = gEmails
                return storageService.postMany(EMAIL_KEY, emailsToReturn).then(() => {
                    return emailsToReturn
                }
                )
            }
            return emailsToReturn
        })
}

function add(email) {
    // const currUser = users[utilService.getRandomInt(0, 4)]
    email.id = utilService.makeId()
    email.isRead = false
    email.sentAt = Date.now()
    // email.sender = currUser.mail
    // email.nickname =  currUser.nickname
    email.sender = 'michael@coding.com'
    email.nickname =  'michael'
    email.isStarred = false
    return storageService.post(EMAIL_KEY, email)
}

function update(email) {
    return storageService.put(EMAIL_KEY, email)
}

function remove(emailId) {
    console.log(emailId)
    return storageService.remove(EMAIL_KEY, emailId)
}




function _createEmails() {
    return [
        {
            id: utilService.makeId(),
            subject: 'Hi! I am a Nigirian Prince',
            body: 'I found $1,000,000 that belongs to you',
            isRead: false,
            sentAt: 1614240148296,
            sender: 'michael@coding.com',
            nickname: 'Not A Spam',
            receiver: 'ytav@coding.com',
            isStarred: false
        },
        {
            id: utilService.makeId(),
            subject: 'Hi',
            body: 'Hey, Are we done with the responsive part yet?',
            isRead: false,
            sentAt: 1614240148296,
            sender: 'ytav@coding.com',
            nickname: 'Ytav',
            receiver: 'michael@coding.com',
            isStarred: false
        },
        {
            id: utilService.makeId(),
            subject: 'I am Hungry!',
            body: 'I think I will add my shopping to the keep parts on the app',
            isRead: true,
            sentAt: 1614455723803,
            sender: 'michael@coding.com',
            nickname: 'Michael',
            receiver: 'ytav@coding.com',
            isStarred: false
        },
        {
            id: utilService.makeId(),
            subject: 'Send this message to 15',
            body: 'Just kidding',
            isRead: true,
            sentAt: 1614240148296,
            sender: 'ytav@coding.com',
            nickname: 'Ytav',
            receiver: 'michael@coding.com',
            isStarred: false
        },
        {
            id: utilService.makeId(),
            subject: 'Nice bar',
            body: 'Thanks',
            isRead: false,
            sentAt: 1614455723803,
            sender: 'michael@coding.com',
            nickname: 'Michael',
            receiver: 'ytav@coding.com',
            isStarred: false
        },
    ]
}
