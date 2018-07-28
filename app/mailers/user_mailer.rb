class UserMailer < ApplicationMailer
	default from: 'no-reply@uniqueextracts.com'
 
	def contact email, message
	    @from_email = email
	    @message  = message
	    mail(to: 'contact@uniqueextracts.com', subject: "New message from #{@from_email}")
	 end
end
