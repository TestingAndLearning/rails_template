class User < ApplicationRecord
  rolify
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

	def admin?
		has_role?(:admin)
	end

	def normal_user?
		has_role?(:normal_user)
	end
end
