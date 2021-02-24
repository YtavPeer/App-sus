import { utilService } from '../../service/utils-service.js'
import { storageService } from '../../service/async-storage-service.js'

const EMAIL_KEY = 'emails'
const gEmails = _createEmails()

export const emailService = {
    query,
    getById
}

//pseudo
const mail = {
    id: utilService.makeId(),
    subject: 'Hi',
    body: 'message',
    isRead: false,
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




function _createEmails() {
    return [
        {
            id: utilService.makeId(),
            subject: 'Hi1',
            body: 'message',
            isRead: true,
            sendAt: 3231322
        },
        {
            id: utilService.makeId(),
            subject: 'Hi2',
            body: 'message',
            isRead: false,
            sendAt: 3231322
        },
        {
            id: utilService.makeId(),
            subject: 'Hi3',
            body: 'message',
            isRead: true,
            sendAt: 3231322
        },
        {
            id: utilService.makeId(),
            subject: 'H4',
            body: 'message',
            isRead: false,
            sendAt: 3231322
        },
        {
            id: utilService.makeId(),
            subject: 'Hi5',
            body: 'message',
            isRead: false,
            sendAt: 3231322
        },
    ]
}
