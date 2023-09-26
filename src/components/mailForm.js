import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import CustomForm from './customForm.js'

const postUrl = process.env.GATSBY_MAIL_KEY

const MailForm = () => {
  return (
    <div className='sign-up'>
      <MailchimpSubscribe
        url={postUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      />
    </div>

    // </div>
  )
}

export default MailForm
