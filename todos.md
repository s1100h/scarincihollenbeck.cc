-- Tonight Deploy
--- Use Context API To store locations for the details functionality
--- Make sure all attorney tabs are up to date and fixed properly
--- Fix all attorney bio broken images (DS, Bienstock, Bruce, Todd, McKillop)
--- Bruce (make awards 1 and mandarin 2)
--- Get Holiday Page set

# SEO Patches based on Report

- Location Page Duplicate Title & Duplicate Description ✅
- Missing Meta Description For Firm Pages (Women Lead, Diversity, Pro Bono...) ✅
- Locations on the concact page ✅
- Schema.org on every page ✅
- Twitter Cards on every page ✅
- ## Having the address on every page we are going to have to finesse ⚠️

# UX/UI Clean Up

- Switched the attorney bio tabs from links to new pages, back to tabs
  --- Reduced the use of Vercel function resources (potential $$ increase)
- Cleaned up attorney bio codebase
  --- CHANGES: articles don't display image in articles
- Cleaned up practice page article feed
- Set up an Awards section in WP backend (screenshot)
  --- Show how they'll go to the front page of the site
- Redid the Award section on the homepage so users can update the award from wp.scarincihollenbeck.com

# Codebase Cleanup

- Switched the Data feed for attorney bios from WP-REST API to GraphQL (The rest api was the one I built and it was dumpster fire)
- Reorganized the Practice Page component code (easier to find bugs)
- Used GraphQL to find Practice Page related ARticles (less of a giant request from the server and includes pagination). Made the component reusable so it'll be used on Attorney Blogs/News Feed and Library Pages
