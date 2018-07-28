class PagesController < ApplicationController

	def get_page
		type = params['type'] ? params['type'] : "home"
	    render :template => "pages/#{type}"
	end

	def contact

		response = contact_validation

		if(response[:success])
			
			email = params[:email]
		    
		    message  = params[:message]

			if(UserMailer.contact(email, message).deliver)
				response = { success: true, message: ["Thanks you we will reach you as soon as possible."]}
			end
		end

		render json: response
	end

	private 
		def contact_validation
			
			response = { success: true, message: []}

			if params[:email].empty?
				response[:message] << "Email is required"
				response[:success] = false
			end

			if params[:message].empty?
				response[:message] << "Message is required"
				response[:success] = false
			end

			if params['g-recaptcha-response'].empty?
				response[:message] << "Recaptcha  is required"
				response[:success] = false
			end

			if !verify_recaptcha
				response[:message] << "Check recaptch checkbox is required"
				response[:success] = false
			end

			response
		end

end
