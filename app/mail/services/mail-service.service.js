import { utilService } from '../../service/utils-service.js'
import { storageService } from '../../service/async-storage-service.js'

const EMAIL_KEY = 'emails'
const gEmails = _createEmails()

export const emailService = {
    query,
    getById,
    add,
    update
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
    sendAt: 3231322
}

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
    email.id = utilService.makeId()
    email.isRead = false
    email.sentAt = Date.now()
    email.sender = 'michael@coding.com'
    email.nickname =  'michael'
    email.isStarred = false
    return storageService.post(EMAIL_KEY, email)
}

function update(email) {
    return storageService.put(EMAIL_KEY, email)
}




function _createEmails() {
    return [
        {
            id: utilService.makeId(),
            subject: 'Hi1',
            body: 'message',
            isRead: false,
            sentAt: 3231322,
            sender: 'michael@coding.com',
            nickname: 'michael',
            receiver: 'ytav@coding.com',
            isStarred: false
        },
        {
            id: utilService.makeId(),
            subject: 'Hi',
            body: 'message',
            isRead: false,
            sentAt: 3231322,
            sender: 'ytav@coding.com',
            nickname: 'michael',
            receiver: 'michael@coding.com',
            isStarred: false
        },
        {
            id: utilService.makeId(),
            subject: 'BAR!',
            body: 'Look at the cool bar',
            isRead: true,
            sentAt: 3231322,
            sender: 'michael@coding.com',
            nickname: 'michael',
            receiver: 'ytav@coding.com',
            isStarred: false
        },
        {
            id: utilService.makeId(),
            subject: 'This is yet another subject',
            body: 'Sender: Ytav Receiver: michael',
            isRead: true,
            sentAt: 3231322,
            sender: 'ytav@coding.com',
            nickname: 'michael',
            receiver: 'michael@coding.com',
            isStarred: false
        },
        {
            id: utilService.makeId(),
            subject: 'This is subject',
            body: 'Sender: michael Receiver: Ytav',
            isRead: false,
            sentAt: 3231322,
            sender: 'michael@coding.com',
            nickname: 'michael',
            receiver: 'ytav@coding.com',
            isStarred: false
        },
    ]
}
