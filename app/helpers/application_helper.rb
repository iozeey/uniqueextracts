module ApplicationHelper
	def secret_key key
		# env = Rails.application.credentials[Rails.env.to_s]
		Rails.application.credentials[key]
	end

	def nav_active_class path, nav_name
		path == nav_name ? "active" : ""
	end
end
