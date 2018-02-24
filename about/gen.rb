#!/usr/bin/env ruby
# encoding: UTF-8
# Generates index.html and book.html

require 'erb'

if ARGV[0] == 'clean'
  File.delete 'index.html'
  File.delete 'book.html'
  exit
end

template_index = ERB.new File.read('index.rhtml')
template_book = ERB.new File.read('book.rhtml')

idx = File.read 'index.txt'
bok = File.read 'book.txt'

File.write 'index.html', template_index.result
File.write 'book.html', template_book.result
