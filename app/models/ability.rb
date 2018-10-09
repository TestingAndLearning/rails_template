class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.normal_user?
      can :read, Book
      can :create, Book
    elsif user.admin?
      can :manage, :all
    else
      can :read, Book
    end
  end
end
