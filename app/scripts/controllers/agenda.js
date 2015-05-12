'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:AgendaCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the gmicnycApp
 */
angular.module('gmicnycApp')
  .controller('AgendaCtrl', function ($scope,topicsFactory) {
    $scope.topics = topicsFactory.getAll();
    $scope.agenda = [
      {
        'title': 'Opening',
        'startTime': '2015-06-11 09:25:00',
        'endTime': '2015-06-11 09:30:00',
        'description': '',
        'topic': '',
        'moderators': '',
        'speakers': '',
        'format': 'Event'
      },{
        'title': 'Mobile On-Demand',
        'startTime': '2015-06-11 09:30:00',
        'endTime': '2015-06-11 10:00:00',
        'description': '',
        'topic': '',
        'moderators': '',
        'speakers': [
          {
            'speakerId': 21,
            'firstName': 'Jenna',
            'lastName': 'Owens',
            'company': 'Google Shopping Express',
            'jobTitle': 'GM Operations',
            'bio': 'Jenna Owens leads Google Express operations. Jenna has spent her career on the cutting edge of e-commerce distribution and customer support operations. Highlights include shipping record volume and launching same day delivery in Amazon’s distribution network as well as restructuring legacy global supply chains for Fortune 500s at McKinsey.',
            'twitter': ''
          }
        ],
        'format': 'Presentation'
      },{
        'title': 'Using Mobile to Deepen Customer Engagement',
        'startTime': '2015-06-11 10:00:00',
        'endTime': '2015-06-11 10:50:00',
        'description': '',
        'topic': 'engagement',
        'moderators': [
          {
            'speakerId': 22,
            'firstName': 'Bianca',
            'lastName': 'Chen',
            'company': 'Thomson Reuters',
            'jobTitle': 'Finance Correspondent',
            'bio': '',
            'twitter': ''
          }
        ],
        'speakers': [
          {
            'id': 3,
            'firstName': 'David',
            'lastName': 'Berkowitz',
            'company': 'MRY',
            'jobTitle': 'Chief Marketing Officer',
            'picture': '/images/speakers/david-berkowitz.jpg',
            'bio': '<p>David Berkowitz is Chief Marketing Officer at agency MRY, a division of Publicis Groupe, where he directs the agency\'s communications and gains visibility for clients such as Visa, Johnson & Johnson, and Coca-Cola. Previously, he spent seven years at 360i, serving as Vice President of Emerging Media; he co-founded its social media practice and led its Startup Outlook initiative. David has contributed more than 500 columns to outlets such as Ad Age, MediaPost, and Mashable, and he has penned his blog MarketersStudio.com since 2005. He has spoken at more than 250 events globally, including a commencement address at his alma mater, Binghamton University.</p>',
            'twitter': 'dberkowitz'
          },{
            'id': 6,
            'firstName': 'Teal',
            'lastName': 'Newland',
            'company': 'StumbleUpon',
            'jobTitle': 'VP of Marketing, Revenue, Partnerships',
            'bio': '',
            'twitter': 'tealn'
          },{
            'id': 4,
            'firstName': 'Jeff',
            'lastName': 'Arbour',
            'company': 'Plyfe',
            'jobTitle': 'Co-founder & CMO',
            'bio': '<p>Jeff Arbour is the CMO and co-founder of Plyfe, with The Plyfe Platform anyone can create interactive cards in minutes [no coding].</p><p>Previous to Plyfe, Arbour was the Senior Vice President of North America at The Hyperfactory, where he was a key driver behind the company\'s growth in North America and defined domestic and global mobile strategies and executions for some of the world\'s most prestigious brands, leading to the eventual acquisition of The Hyperfactory by Meredith Corporation in 2010.</p><p>Arbour has been helping brands navigate the new media space since 2003. Jeff also sits on several advisory boards for digital companies, including Quixey and Cameo (acquired by Vimeo). Jeff is also a founding advisor for Palindrome Advisors, a not-for-profit organization.</p><p>Over the years, Jeff has worked with top clients such as Toyota, Ab InBev, BlackBerry, L’Oréal, Coca-Cola, Intel, Microsoft and Kraft, and has won numerous awards recognized by the Mobile Marketing Association, AdTech and the Webbys, among others.</p><p>In 2008, Jeff was named #1 in DM News’ Top 30 Under 30, Direct and Interactive Marketers Under 30, as well as one of the Top 100 Most Influential Marketers of 2008 and 2009 by Invesp Consulting, and continues to be a sought after guest speaker at various international conferences</p>',
            'twitter': 'jeffarbour'
          },{
            'speakerId': 20,
            'firstName': 'Chieh',
            'lastName': 'Huang',
            'company': 'Boxed',
            'jobTitle': 'CEO',
            'bio': '',
            'twitter': ''
          }
        ],
        'format': 'Panel'
      },{
        'title': 'Coffee Break',
        'startTime': '2015-06-11 10:50:00',
        'endTime': '2015-06-11 11:00:00',
        'description': '',
        'topic': '',
        'moderators': '',
        'speakers': '',
        'format': 'Break'
      },{
        'title': 'OmniChannel Approach: Creating Powerful Customer Experiences',
        'startTime': '2015-06-11 11:00:00',
        'endTime': '2015-06-11 11:50:00',
        'description': '',
        'topic': 'omnichannel',
        'moderators': [
          {
            'id': 12,
            'firstName': 'Yev',
            'lastName': 'Galper',
            'company': 'EPAM',
            'jobTitle': 'Head of Mobile Competency Center',
            'bio': '',
            'twitter': ''
          }
        ],
        'speakers': [
          {
            'id': 2,
            'firstName': 'Tyler',
            'lastName': 'McKinley',
            'company': 'MobileRQ',
            'jobTitle': 'CEO',
            'bio': '',
            'twitter': 'TylerMcKinley7'
          },{
            'id': 8,
            'firstName': 'Jill',
            'lastName': 'Wilson',
            'company': 'SGN',
            'jobTitle': 'SVP of Game Development',
            'bio': '<p>As SVP of Game Development, Jill (Schneiderman) Wilson oversees all aspects of SGN’s production, from concept through lifecycle. She is responsible for both the strategic planning and day-to-day operations of the company’s industry-leading cross-platform game development. As employee #3 (after founding partners), Jill spearheaded the company’s original expansion into game development and has grown their production team into the mobile-social leader it is today.</p><p>Prior to SGN, Jill held a hybrid of business and creative roles at start-up board game company, Imagination Games. During her tenure with Imagination, Jill pioneered the company’s international sales and outbound licensing business and created several board games, including the Gossip Girl: Never Have I Ever game.</p><p>Jill serves as an advisor to the Casual Games Association and is a regular speaker at industry events. In her spare time, she plays competitive backgammon in the Bay Area, where she currently resides. Jill graduated Magna Cum Laude from the University of Southern California, and was born and raised in New York City.</p>',
            'twitter': ''
          },{
            'speakerId': 25,
            'firstName': 'Xander',
            'lastName': 'Kotsatos',
            'company': 'Rocket Fuel',
            'jobTitle': 'Mobile Strategy Lead, East',
            'bio': '<p>A 6-year AdTech veteran, Xander has managed strategy across mobile, display, video, social and affiliate programs for some of the largest Fortune 500 companies in the U.S. His dedication to building campaigns that drive performance is surpassed only by his passion for the mobile space and its ability to create true impact for brands in a multi-screen world.</p><p>In his current position as the East Coast Mobile Strategy Lead for Rocket Fuel, Xander works with a world-class team to leverage artificial intelligence and big data to make mobile a measurable and results-driven marketing channel across a clients\' owned and paid media. Prior to his current role, Xander worked in agency sales, strategy and client services in the Detroit, Atlanta, DC, New York and Boston markets for both Rocket Fuel and ValueClick Media (now Conversant div. of Alliance Data) where he developed strong partner relationships to build breakthrough digital advertising programs across almost every major vertical.</p><p>A graduate of Colby College, Xander lives in New York with his wife. When not skiing or playing music, Xander is an avid Fantasy Football Player.</p>',
            'twitter': ''
          }
        ],
        'format': 'Panel'
      },{
        'title': 'Mobile Wallet:  It\'s not just about Payments',
        'startTime': '2015-06-11 11:55:00',
        'endTime': '2015-06-11 12:15:00',
        'description': '',
        'topic': 'wallet',
        'moderators': '',
        'speakers': [
          {
            'speakerId': 24,
            'firstName': 'Mike',
            'lastName': 'Dudas',
            'company': 'Button',
            'jobTitle': 'Co-Founder & Chief Revenue Officer',
            'bio': '',
            'twitter': ''
          }
        ],
        'format': 'Presentation'
      },{
        'title': 'Lunch',
        'startTime': '2015-06-11 12:15:00',
        'endTime': '2015-06-11 13:15:00',
        'description': '',
        'topic': '',
        'moderators': '',
        'speakers': '',
        'format': 'Break'
      },{
        'title': 'Case Study: Coca-Cola & Misfit Wearables',
        'startTime': '2015-06-11 13:15:00',
        'endTime': '2015-06-11 13:40:00',
        'description': '',
        'topic': '',
        'moderators': '',
        'speakers': '',
        'format': 'Presentation'
      },{
        'title': 'Presentation: Citi',
        'startTime': '2015-06-11 13:45:00',
        'endTime': '2015-06-11 14:05:00',
        'description': '',
        'topic': '',
        'moderators': '',
        'speakers': [
          {
            'speakerId': 27,
            'firstName': 'Heather',
            'lastName': 'Cox',
            'company': 'Citi',
            'jobTitle': 'Chief Client Experience, Digital and Marketing Officer for Global Consumer Banking',
            'bio': 'Heather Cox has been the Chief Client Experience, Digital and Marketing Officer for Global Consumer Banking at Citigroup since April 2014. Ms. Cox is responsible for developing and implementing the vision, strategy and execution of a common client experience, driving global customer satisfaction efforts and leading Digital, Marketing and Decision Management across Global Consumer Banking. Prior to joining Citi, Ms. Cox served as the Head of Card Operations at Capital One Financial Corporation, where she developed, led and delivered a comprehensive customer experience strategy, leveraging digital innovations and customer data insights to help position it for further growth, customer engagement, and operating efficiency. Prior to Capital One, Ms. Cox served as the Head of North America Operations at E*TRADE. Ms. Cox was honored as one of American Banker\'s "Women to Watch" in 2011 and 2013, and was recognized by Washington Busin ess Journal\'s "Women Who Mean Business" in 2013',
            'twitter': ''
          }
        ],
        'format': 'Presentation'
      },{
        'title': 'Securing the New Wearables World',
        'startTime': '2015-06-11 14:10:00',
        'endTime': '2015-06-11 14:30:00',
        'description': '<p>Consumers are now widely adopting wearable technology – consulting firm Deloitte predicted there will be 100 million wearable cameras, smartwatches, fitness trackers and other gadgets on the market by 2020. But with this mass adoption of wearable devices, comes a new data ecosystem that must be protected. Wearables are opening up new pathways that facilitate the tracking, sharing and storing of consumers’ personal health, location and daily activity data. Someone’s heart rate, blood pressure, finances, demographics and daily routine including exercise habits and commuting patterns are being collected and used to improve everyday life.</p><p>That’s why embracing the protection of this new, intricate data ecosystem is imperative to the success of wearable industry. By effectively addressing the security vulnerabilities, privacy concerns and regulation issues that come with the evolving wearable industry, this brave new world can be enjoyed by all.</p>',
        'topic': '',
        'moderators': '',
        'speakers': [
          {
            'speakerId': 30,
            'firstName': 'Gary',
            'lastName': 'Davis',
            'company': 'Intel Security',
            'jobTitle': 'Chief Consumer Security Evangelist',
            'bio': '<p>Gary Davis is Chief Consumer Security Evangelist. Through a consumer lens, he works closely with internal teams to drive strategic alignment of products with the needs of the security space. Gary also oversees Intel Security\'s online safety education to educate businesses and consumers by distilling complex security topics into easily understandable and actionable advice. During his 5+ years at the company, he has held leadership roles in the consumer and enterprise divisions where he has helped shape various product portfolios and strategic direction along with advocating for cybersecurity education. Gary has appeared on several business, security and consumer lifestyle media outlets, including CNBC, NBC, FOX, and CBS Bay Area stations; and quoted in the New York Times, Wall Street Journal, CNN, Forbes, TIME Magazine, MSNBC, PC Magazine, CNET, CSO Magazine, and PC World. Prior to joining McAfee, he held senior management positions for more than 15 years in technology companies. Gary serves on the board of directors of the National Cyber Security Alliance (NCSA).</p>',
            'twitter': ''
          }
        ],
        'format': 'Presentation'
      },{
        'title': 'Making Beacons Work for You',
        'startTime': '2015-06-11 14:35:00',
        'endTime': '2015-06-11 15:20:00',
        'description': '',
        'topic': 'beacons',
        'moderators': [
          {
            'id': 9,
            'firstName': 'Dan',
            'lastName': 'Herman',
            'company': 'ChatID',
            'jobTitle': 'Founder & CEO',
            'bio': '',
            'twitter': 'dan_herman'
          }
        ],
        'speakers': [
          {
            'id': 11,
            'firstName': 'Ryan',
            'lastName': 'Craver',
            'company': 'Lamour Group',
            'jobTitle': 'SVP Emerging Brands, Licensing & Digital',
            'picture': '/images/speakers/ryan-craver.jpg',
            'bio': 'Ryan\'s natural fascination with the intersection of retail and technology has led to a career of inspiring and leading retailers to be on the forefront of the evolving "connected retail" environment. Ryan enjoys tackling changing consumer dynamics and defining how retail organizations and brands can leverage technology to strengthen their competitive position. Ryan currently leads Emerging Brands, Licensing and Digital Strategy for Lamour Group\'s portfolio of global brands while advising several startups focused on Mobile and AdTech. Prior to joining Lamour, Ryan was in charge of the core department store strategy at Lord & Taylor / Hudson\'s Bay Company and was a senior leader at Accenture, driving growth and profit improvement across multiple clients, including Virgin Media, FedEx and Best Buy.',
            'twitter': 'ryanmcraver'
          },{
            'speakerId': 10,
            'firstName': 'Wesley',
            'lastName': 'Barrow',
            'company': 'Nomi',
            'jobTitle': 'Founder',
            'bio': '<p>Wesley Barrow is the Founder and Head of Strategic Markets for Nomi - the world\'s leading analytics platform for brick-and-mortar retailers. Prior to Nomi, Wesley was a veteran enterprise software executive who spent 2.5 years with Buddy Media - a social media marketing platform. As Buddy Media’s #1 revenue producer, Wesley helped scale its business from 40 to 300 people through agency partnerships and sales. Wesley’s top clients spanned across automotive, CPG, retail and pharma verticals including companies such as Ford, GM, Toyota, Unilever, Kraft, GSK, Shell, Petsmart, MetroPCS and many others. In August 2012, Buddy Media was acquired by Salesforce.com for $745 million.</p><p>Prior to Buddy Media, Wesley was the Director of Business Development at Reality Digital where he structured deals with entertainment and brand clients including Pepsi, YouTube and MTV and previously worked in Corporate Consulting for the William Morris Agency.</p><p>Wesley holds a B.A in Cinema Studies from the University of Pennsylvania and has spoken at many retail and technology events such as CES, SXSW, Social Media Week, Decoded Fashion, Fashion Forward, Fashion Digital, iProspect, Flurry Source and more.</p>',
            'twitter': 'wesleybarrow'
          },{
            'speakerId': 29,
            'firstName': 'David',
            'lastName': 'VanderWaal',
            'company': 'LG',
            'jobTitle': 'VP Marketing',
            'bio': '',
            'twitter': ''
          }
        ],
        'format': 'Panel'
      },{
        'title': 'Mastering Mobile Engagement',
        'startTime': '2015-06-11 15:30:00',
        'endTime': '2015-06-11 16:15:00',
        'description': 'Keeping your opt-in users takes planning, especially in an industry with declining year-over-year opt-in rates for push notifications. Users don’t want to be distracted with messages, especially when those interruptions are not relevant. We’ll explore factors that impact engagement rates, and how you can create meaningful experiences for your users in an era where half the time consuming digital media is spent on mobile. ',
        'topic': 'millennials',
        'moderators': '',
        'speakers': [
          {
            'id': 19,
            'firstName': 'Alyssa',
            'lastName': 'Meritt',
            'company': 'Urban Airship',
            'jobTitle': 'Head of Strategic Consulting',
            'bio': '<p>As Head of Strategic Consulting at Urban Airship, Alyssa leads a team of consultants that deliver tailored, digital marketing strategies to enterprise clients in order to increase mobile app engagement and grow business ROI. Strategy sessions use research, trends and data on markets, consumers and culture, to define app and messaging strategies and KPIs, and ultimately inspire clients to incorporate a profitable relationship-based mobile strategy into their core marketing mix.</p><p>Alyssa’s client experience spans a diverse set of vertical industries, including brands such as The Times, Starwood, CBS, the NBA, NASCAR, Virgin Atlantic, Bank of America, BCBS, Dunkin’ Donuts, PayPal, Caesar’s Entertainment, Abercrombie + Fitch, Neiman Marcus, Novartis, Biogen, and Comcast. Prior to Urban Airship, Alyssa was Vice President Marketing at DigitasLBi She has over 15 years experience in creating innovative mobile and web-based applications and user-centric digital experiences from roles at various advertising and digital media companies on the agency-side, client-side and as an entrepreneur.</p>',
            'twitter': ''
          },{
            'id': 18,
            'firstName': 'Matt',
            'lastName': 'Restivo',
            'company': 'NHL',
            'jobTitle': 'Director of Product Development',
            'bio': '',
            'twitter': 'mattrestivo'
          },{
            'speakerId': 23,
            'firstName': 'Julia',
            'lastName': 'Beizer',
            'company': 'The Washington Post',
            'jobTitle': 'Mobile Projects Editor',
            'bio': '',
            'twitter': ''
          }
        ],
        'format': 'Presentation'
      },{
        'title': 'Coffee Break',
        'startTime': '2015-06-11 15:20:00',
        'endTime': '2015-06-11 15:30:00',
        'description': '',
        'topic': '',
        'moderators': '',
        'speakers': '',
        'format': 'Break'
      },{
        'title': 'Millennials: Make it Personal and Customized',
        'startTime': '2015-06-11 16:20:00',
        'endTime': '2015-06-11 17:05:00',
        'description': '',
        'topic': 'millennials',
        'moderators': '',
        'speakers': [
          {
            'id': 1,
            'firstName': 'Ryan',
            'lastName': 'Matzner',
            'company': 'Fueled',
            'jobTitle': 'Director & Chief Strategist',
            'bio': 'Ryan Matzner is the Director of Strategy at Fueled, a mobile design and development shop based in NYC and London. He has a decade of online and mobile marketing experience, working with clients such as American Express, Condé Nast, Ideeli, Thrillist, HBO, QuizUp, Barneys, and Gilt Groupe. He can be found on Facebook, Twitter, LinkedIn and Google+.',
            'twitter': 'rdm'
          },{
            'id': 15,
            'firstName': 'Mark',
            'lastName': 'Egerman',
            'company': 'Cover',
            'jobTitle': 'Co-founder',
            'bio': '',
            'twitter': 'megerman'
          },{
            'id': 7,
            'firstName': 'Steve',
            'lastName': 'Callanan',
            'company': 'Wirewax',
            'jobTitle': 'Co-founder & CEO',
            'bio': '<p>Steve, an Electronic Engineering major, established his first production company in 2001 producing movie trailers, motion graphics, music videos and commercials; and was also producing over 400 hours of branded, short-form fashion and beauty content for the four biggest lifestyle publishers. He proposed that online video content should be as \'connected\' as the rest of the web; linking pixels to people, products and information was the goal. He engineered the world\'s first shoppable video player which lead to the most powerful interactive video platform to help hundreds of global brands realize their video potential.</p>',
            'twitter': 'steviewax'
          },{
            'speakerId': 28,
            'firstName': 'Calvin',
            'lastName': 'Chan',
            'company': 'AdMaster',
            'jobTitle': 'Chief Operating Officer',
            'bio': '<p>As Chief Operating Officer, Calvin is responsible for AdMaster’s operational excellence, organizational development and strategic partnerships. Calvin also holds responsibilities for the best delivery of wide-ranging solutions with his capability teams. Since joining AdMaster in 2012, Calvin previously held the positions of General Manager of AdMaster’s Beijing office, as well as Vice President, Strategy & Insights. Prior to that, Calvin worked in the US and China for the Nielsen Company.</p><p>In his over 10 years of media data solution experience, Calvin has set himself as the most innovative and dynamic, cross-media data solution expert and co-authors the book "Research on Cross-media Communication Strategy". Calvin is enlisted by Campaign for the 2014 and 2015 "Digital A-List", which recognizes top digital marketing experts in China. And he is a frequent speaker in high-level forum like Global Mobile International Conference (GMIC) and his opinions are always quoted by influential media including Campaign and China Daily, etc. Calvin is also regularly invited as judge member for industry awards, e.g. Effie Awards，Golden Mouse, ECI Awards and MMA Smarties Awards.</p><p>He also chairs the Board of Advisors for AIESEC in Mainland China, a non-profit that promotes youth leadership and global exchange programs.</p><p>Calvin has a bachelor’s degree in Marketing and a master’s degree in Humanities, both from The Hong Kong University of Science & Technology (HKUST).</p>',
            'twitter': ''
          }
        ],
        'format': 'Panel'
      },{
        'title': 'VC Perspectives: Monetizing your Customer\'s Mobile Experience',
        'startTime': '2015-06-11 17:10:00',
        'endTime': '2015-06-11 17:55:00',
        'description': '',
        'topic': 'vcs',
        'moderators': [
          {
            'speakerId': 31,
            'firstName': 'Barrett',
            'lastName': 'Parkman',
            'company': 'GWC US',
            'jobTitle': 'President',
            'bio': '',
            'twitter': ''
          }
        ],
        'speakers': [
          {
            'id': 17,
            'firstName': 'Tim',
            'lastName': 'Chang',
            'company': 'Mayfield',
            'jobTitle': 'Managing Director',
            'bio': '<p>"I’ve learned a lot about teamwork from the three bands I perform with. Each member should possess a unique voice and super-power, but only when the collective is comprised of complementary talents does real magic occur. The same dynamic applies for building startups and venture investing."</p><p>I\'m currently championing:</p><ul><li>3D Robotics: The world pioneer in unmanned aerial vehicle (UAV) drone platforms</li><li>fitmob: Re-inventing the gym through local social group workouts</li><li>HealthTap: Mobile-first doctor-patient community and on-demand health services</li><li>Lantern: Online programs and coaching that strengthen your emotional well-being</li><li>Massdrop: Massdrop is building an online community for enthusiasts.</li><li>Moat: Brand analytics and intelligence SaaS platform</li><li>OUYA: Android-powered video game microconsole and community</li><li>Syntertainment: Stealth company from the creator of SimCity, the Sims and Spore</li><li>Zirtual: Virtual assistant services marketplace</li></ul><p>Some of my notable successes:</p><ul><li>AdChina: Acquired by Alibaba</li><li>Basis: The industry’s most advanced wearable health tracker (acquired by Intel in 2014)</li><li>Iridigm: Revolutionary MEMS-based reflective displays (acquired by Qualcomm)</li><li>ngMoco: Early leader in mobile social gaming (acquired by DeNA)</li><li>Playdom: One of the first three big social game publishers (acquired by Disney)</li></ul><p>Tim’s pre-Mayfield investments include:</p><ul><li>Lumosity: Leader in brain training and mental fitness</li><li>PCH International: Virtualized design, manufacturing, and logistics services for next-generation connected devices</li></ul><p>Awards & recognition:</p><ul><li>One of “Top 100 Tech Investors” on Forbes Midas list in 2011 & 2012</li><li>One of “12 Most Influential Tech Investors” by CNET</li><li>Always On Digital Media & Mobile Power Player</li><li>Gamification Summit award for Special Achievement in the Industry</li></ul>',
            'twitter': ''
          },{
            'speakerId': 26,
            'firstName': 'Nihal',
            'lastName': 'Mehta',
            'company': 'Eniac',
            'jobTitle': 'Founding General Partner',
            'bio': '<p>Nihal Mehta is a Founding General Partner at Eniac Ventures. With over 15 years experience in marketing technologies through founding five startups and investing in 100+ since 1999, Nihal Mehta is a noted expert in the emerging adoption of mobile technologies for media properties and consumer brands.</p><p>Nihal founded M1 "Mobile-First" Summit in 2014, bringing together thousands of mobile innovators with two events/year in NYC and San Francisco. Prior to Eniac, Nihal co-founded LocalResponse, Inc. (now Qualia Media), which makes ads more relevant from social signals, which he pivoted from buzzd, the first mobile real-time city guide. As the founding CEO, Nihal grew LocalResponse\'s revenues 2153% over a three year period, which placed the company to #204 (#14 in NYC) to the 2014 Inc. 5000\'s Fastest Growing Companies and #67 to the 2013 Forbes list of America\'s Most Promising Companies. Prior to LocalResponse, Nihal founded ipsh!, one of the first full-service mobile marketing agencies in 2001, which was acquired by Omnicom (NYSE: OMC) in 2005. Nihal\'s investment portfolio includes Admob (sold to Google), Airbnb, HotelTonight, Swiftkey, Tapad & Uber.</p><p>In 2014, Nihal was named to AlleyWatch\'s "100 NYC Tech Influencers You Need to Know," in 2013, a semi-finalist for "Entrepreneur of the Year" by Ernst & Young, in 2012 a top 100 "Coolest People in NY Tech,"" by Business Insider, a "NYC tech influencer" by VentureBeat, one of the "25 People Every New Founder Should Meet in New York Tech" a top "25 Up-And-Coming Startup CEO in New York" by Business Insider, and a 2012 AlwaysOn "Power Player NYC."" Mehta was named a top 10 New York City "Game Changer" in the 2010 New York Enterprise Report, one of twenty RCR Wireless News "Mobile Movers and Shakers" in 2008, a BusinessWeek "M-Commerce Baron" in 2006 and named one of Ad Age\'s "Top 20 Marketers in Their 20s" in 2005. Nihal frequently guest lectures at business schools around the country on entrepreneurship and mobile marketing, and is published in over 15 books and white papers on the subject.</p><p>Nihal graduated from the University of Pennsylvania with a BA in Philosophy and a BSE in Computer Science.</p>',
            'twitter': ''
          }
        ],
        'format': 'Panel'
      },{
        'title': 'Networking Reception',
        'startTime': '2015-06-11 18:00:00',
        'endTime': '2015-06-11 19:15:00',
        'description': '',
        'topic': '',
        'moderators': '',
        'speakers': '',
        'format': 'Event'
      }
    ];
    $scope.parseDate = function(mySqlDate) {
      var d = mySqlDate.split(/[- :]/);
      return new Date(d[0], d[1]-1, d[2], d[3] || 0, d[4] || 0, d[5] || 0);
    };
    $scope.orderByDate = function (item) {
      return $scope.parseDate(item.startTime);
    };
    $scope.toggleDesc = function() {
      this.session.show = !this.session.show;
    };
  });
