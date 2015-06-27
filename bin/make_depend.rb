Dir["src/**/*.js"].each do |filename|
  target = filename.sub(/^src/, 'build')
  puts "#{target}: #{filename}"
  puts "\tmkdir -p #{File.dirname target} && babel #{filename} > #{target}"
  puts ""
end
