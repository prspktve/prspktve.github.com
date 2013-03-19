require 'fileutils'

module Jekyll
  class AlexasSassGenerator < Generator
    safe true
    
    def generate(site)
      s = File.join(site.source, "css/layout.scss")  
      d = File.join(site.source, "css/layout.css")
      puts "Calling sass converter..."
      `sass -q #{s}:#{d}`
      site.static_files << StaticFile.new(site, site.source, "css", "layout.css")
    end
  end
end
