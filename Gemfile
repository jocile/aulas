# frozen_string_literal: true

source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 5.2", ">= 5.2.1"

group :test do
  #gem "html-proofer", "~> 3.18"
  gem "html-proofer", "~> 4.4"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
#install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
platforms :mingw, :x64_mingw, :mswin, :jruby do
  #gem "tzinfo", "~> 1.2"
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
#gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Jekyll <= 4.2.0 compatibility with Ruby 3.0
#gem "webrick", "~> 1.7"

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
