@varsionArr = ['Founder', 'Gold', 'Normal', 'GOTY', 'Collectors']

5.times do
  Platform.create(
    name: Faker::Game.platform,
    bought: Faker::Date.between(from: '2000-01-01', to: '2022-01-04'),
    version: @varsionArr.sample,
    user_id: 4
  )
end

puts Platform.count