Role.create(name: 'admin')
Role.create(name: 'normal_user')
user1 = User.create(email: 'admin@mediocreinventions.com',
					password: 'qwerty123',
					password_confirmation: 'qwerty123')
user1.add_role(:admin)
user2 = User.create(email: 'user@mediocreinventions.com',
					password: 'qwerty123',
					password_confirmation: 'qwerty123')
user2.add_role(:normal_user)

1.upto(5) do |i|
	Book.create(title: "Book #{i}", author: "Author #{i}", description: "A sample book", pages: i*10, published: "2018-#{i}-10")
end