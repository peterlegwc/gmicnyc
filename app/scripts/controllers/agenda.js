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
        'startTime': '2015-06-11 09:30:00',
        'endTime': '2015-06-11 09:35:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': '',
        'format': 'Event'
      }, {
        'title': 'OmniChannel Approach: Create a Mobile Experience That Keeps Your Customers Coming Back',
        'startTime': '2015-06-11 09:35:00',
        'endTime': '2015-06-11 09:55:00',
        'description': '',
        'topic': 'omnichannel',
        'moderator': '',
        'speakers': [
          {
            'id': 14,
            'firstname': 'Alex',
            'lastname': 'Wang',
            'company': 'Baidu',
            'title': 'Head of New Product',
            'bio': '',
            'twitter': ''
          }
        ],
        'format': 'Presentation'
      }, {
        'title': 'Using Mobile to Deepen Customer Engagement',
        'startTime': '2015-06-11 10:00:00',
        'endTime': '2015-06-11 10:50:00',
        'description': '',
        'topic': 'engagement',
        'moderator': '',
        'speakers': [
          {
            'id': 3,
            'firstname': 'David',
            'lastname': 'Berkowitz',
            'company': 'MRY',
            'title': 'Chief Marketing Officer',
            'picture': '/images/speakers/david-berkowitz.jpg',
            'bio': '<p>David Berkowitz is Chief Marketing Officer at agency MRY, a division of Publicis Groupe, where he directs the agency\'s communications and gains visibility for clients such as Visa, Johnson & Johnson, and Coca-Cola. Previously, he spent seven years at 360i, serving as Vice President of Emerging Media; he co-founded its social media practice and led its Startup Outlook initiative. David has contributed more than 500 columns to outlets such as Ad Age, MediaPost, and Mashable, and he has penned his blog MarketersStudio.com since 2005. He has spoken at more than 250 events globally, including a commencement address at his alma mater, Binghamton University.</p>',
            'twitter': 'dberkowitz'
          },{
            'id': 6,
            'firstname': 'Teal',
            'lastname': 'Newland',
            'company': 'StumbleUpon',
            'title': 'VP of Marketing, Revenue, Partnerships',
            'bio': '',
            'twitter': 'tealn'
          },{
            'id': 4,
            'firstname': 'Jeff',
            'lastname': 'Arbour',
            'company': 'Plyfe',
            'title': 'Co-founder & CMO',
            'bio': '<p>Jeff Arbour is the CMO and co-founder of Plyfe, with The Plyfe Platform anyone can create interactive cards in minutes [no coding].</p><p>Previous to Plyfe, Arbour was the Senior Vice President of North America at The Hyperfactory, where he was a key driver behind the company\'s growth in North America and defined domestic and global mobile strategies and executions for some of the world\'s most prestigious brands, leading to the eventual acquisition of The Hyperfactory by Meredith Corporation in 2010.</p><p>Arbour has been helping brands navigate the new media space since 2003. Jeff also sits on several advisory boards for digital companies, including Quixey and Cameo (acquired by Vimeo). Jeff is also a founding advisor for Palindrome Advisors, a not-for-profit organization.</p><p>Over the years, Jeff has worked with top clients such as Toyota, Ab InBev, BlackBerry, L’Oréal, Coca-Cola, Intel, Microsoft and Kraft, and has won numerous awards recognized by the Mobile Marketing Association, AdTech and the Webbys, among others.</p><p>In 2008, Jeff was named #1 in DM News’ Top 30 Under 30, Direct and Interactive Marketers Under 30, as well as one of the Top 100 Most Influential Marketers of 2008 and 2009 by Invesp Consulting, and continues to be a sought after guest speaker at various international conferences</p>',
            'twitter': 'jeffarbour'
          }
        ],
        'format': 'Panel'
      }, {
        'title': 'Coffee Break',
        'startTime': '2015-06-11 10:50:00',
        'endTime': '2015-06-11 11:00:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': '',
        'format': 'Break'
      }, {
        'title': 'OmniChannel Approach: Creating Powerful Customer Experiences',
        'startTime': '2015-06-11 11:00:00',
        'endTime': '2015-06-11 11:50:00',
        'description': '',
        'topic': 'omnichannel',
        'moderator': {
          'id': 12,
          'firstname': 'Yev',
          'lastname': 'Galper',
          'company': 'EPAM',
          'title': 'Head of Mobile Competency Center',
          'bio': '',
          'twitter': ''
        },
        'speakers': [
          {
            'id': 2,
            'firstname': 'Tyler',
            'lastname': 'McKinley',
            'company': 'MobileRQ',
            'title': 'CEO',
            'bio': '',
            'twitter': 'TylerMcKinley7'
          },{
            'id': 8,
            'firstname': 'Jill',
            'lastname': 'Wilson',
            'company': 'SGN',
            'title': 'SVP of Game Development',
            'bio': '<p>As SVP of Game Development, Jill (Schneiderman) Wilson oversees all aspects of SGN’s production, from concept through lifecycle. She is responsible for both the strategic planning and day-to-day operations of the company’s industry-leading cross-platform game development. As employee #3 (after founding partners), Jill spearheaded the company’s original expansion into game development and has grown their production team into the mobile-social leader it is today.</p><p>Prior to SGN, Jill held a hybrid of business and creative roles at start-up board game company, Imagination Games. During her tenure with Imagination, Jill pioneered the company’s international sales and outbound licensing business and created several board games, including the Gossip Girl: Never Have I Ever game.</p><p>Jill serves as an advisor to the Casual Games Association and is a regular speaker at industry events. In her spare time, she plays competitive backgammon in the Bay Area, where she currently resides. Jill graduated Magna Cum Laude from the University of Southern California, and was born and raised in New York City.</p>',
            'twitter': ''
          }
        ],
        'format': 'Panel'
      }, {
        'title': 'Mobile Wallet:  It\'s not just about Payments',
        'startTime': '2015-06-11 11:50:00',
        'endTime': '2015-06-11 12:30:00',
        'description': '',
        'topic': 'wallet',
        'moderator': '',
        'speakers': '',
        'format': 'Presentation'
      }, {
        'title': 'Lunch',
        'startTime': '2015-06-11 12:30:00',
        'endTime': '2015-06-11 13:15:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': '',
        'format': 'Break'
      }, {
        'title': 'Millennials: Maximizing Gamification',
        'startTime': '2015-06-11 13:15:00',
        'endTime': '2015-06-11 13:45:00',
        'description': '',
        'topic': 'millennials',
        'moderator': '',
        'speakers': '',
        'format': 'Presentation'
      }, {
        'title': 'Making Beacons Work for You',
        'startTime': '2015-06-11 13:50:00',
        'endTime': '2015-06-11 14:40:00',
        'description': '',
        'topic': 'beacons',
        'moderator': {
          'id': 9,
          'firstname': 'Dan',
          'lastname': 'Herman',
          'company': 'ChatID',
          'title': 'Founder & CEO',
          'bio': '',
          'twitter': 'dan_herman'
        },
        'speakers': [
          {
            'id': 11,
            'firstname': 'Ryan',
            'lastname': 'Craver',
            'company': 'Lamour Group',
            'title': 'SVP Emerging Brands, Licensing & Digital',
            'picture': '/images/speakers/ryan-craver.jpg',
            'bio': 'Ryan\'s natural fascination with the intersection of retail and technology has led to a career of inspiring and leading retailers to be on the forefront of the evolving "connected retail" environment. Ryan enjoys tackling changing consumer dynamics and defining how retail organizations and brands can leverage technology to strengthen their competitive position. Ryan currently leads Emerging Brands, Licensing and Digital Strategy for Lamour Group\'s portfolio of global brands while advising several startups focused on Mobile and AdTech. Prior to joining Lamour, Ryan was in charge of the core department store strategy at Lord & Taylor / Hudson\'s Bay Company and was a senior leader at Accenture, driving growth and profit improvement across multiple clients, including Virgin Media, FedEx and Best Buy.',
            'twitter': 'ryanmcraver'
          },{
            'id': 10,
            'firstname': 'Wesley',
            'lastname': 'Barrow',
            'company': 'Nomi',
            'title': 'Founder',
            'bio': '',
            'twitter': 'wesleybarrow'
          }
        ],
        'format': 'Panel'
      }, {
        'title': 'Millennials: Digital Media Consumption in 2015',
        'startTime': '2015-06-11 14:45:00',
        'endTime': '2015-06-11 15:20:00',
        'description': '',
        'topic': 'millennials',
        'moderator': '',
        'speakers': [
          {
            'id': 19,
            'firstname': 'Alyssa',
            'lastname': 'Meritt',
            'company': 'Urban Airship',
            'title': 'Head of Strategic Consulting',
            'bio': '<p>As Head of Strategic Consulting at Urban Airship, Alyssa leads a team of consultants that deliver tailored, digital marketing strategies to enterprise clients in order to increase mobile app engagement and grow business ROI. Strategy sessions use research, trends and data on markets, consumers and culture, to define app and messaging strategies and KPIs, and ultimately inspire clients to incorporate a profitable relationship-based mobile strategy into their core marketing mix.</p><p>Alyssa’s client experience spans a diverse set of vertical industries, including brands such as The Times, Starwood, CBS, the NBA, NASCAR, Virgin Atlantic, Bank of America, BCBS, Dunkin’ Donuts, PayPal, Caesar’s Entertainment, Abercrombie + Fitch, Neiman Marcus, Novartis, Biogen, and Comcast. Prior to Urban Airship, Alyssa was Vice President Marketing at DigitasLBi She has over 15 years experience in creating innovative mobile and web-based applications and user-centric digital experiences from roles at various advertising and digital media companies on the agency-side, client-side and as an entrepreneur.</p>',
            'twitter': ''
          },{
            'id': 18,
            'firstname': 'Matt',
            'lastname': 'Restivo',
            'company': 'NHL',
            'title': 'Director of Product Development',
            'bio': '',
            'twitter': 'mattrestivo'
          }
        ],
        'format': 'Presentation'
      }, {
        'title': 'Coffee Break',
        'startTime': '2015-06-11 15:20:00',
        'endTime': '2015-06-11 15:30:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': '',
        'format': 'Break'
      }, {
        'title': 'Millennials: Make it Personal and Customized',
        'startTime': '2015-06-11 15:30:00',
        'endTime': '2015-06-11 16:20:00',
        'description': '',
        'topic': 'millennials',
        'moderator': '',
        'speakers': [
          {
            'id': 1,
            'firstname': 'Ryan',
            'lastname': 'Matzner',
            'company': 'Fueled',
            'title': 'Director & Chief Strategist',
            'bio': 'Ryan Matzner is the Director of Strategy at Fueled, a mobile design and development shop based in NYC and London. He has a decade of online and mobile marketing experience, working with clients such as American Express, Condé Nast, Ideeli, Thrillist, HBO, QuizUp, Barneys, and Gilt Groupe. He can be found on Facebook, Twitter, LinkedIn and Google+.',
            'twitter': 'rdm'
          },{
            'id': 15,
            'firstname': 'Mark',
            'lastname': 'Egerman',
            'company': 'Cover',
            'title': 'Co-founder',
            'bio': '',
            'twitter': 'megerman'
          },{
            'id': 7,
            'firstname': 'Steve',
            'lastname': 'Callanan',
            'company': 'Wirewax',
            'title': 'Co-founder & CEO',
            'bio': '<p>Steve, an Electronic Engineering major, established his first production company in 2001 producing movie trailers, motion graphics, music videos and commercials; and was also producing over 400 hours of branded, short-form fashion and beauty content for the four biggest lifestyle publishers. He proposed that online video content should be as \'connected\' as the rest of the web; linking pixels to people, products and information was the goal. He engineered the world\'s first shoppable video player which lead to the most powerful interactive video platform to help hundreds of global brands realize their video potential.</p>',
            'twitter': 'steviewax'
          }
        ],
        'format': 'Panel'
      }, {
        'title': 'VC Perspectives: Monetizing your Customer\'s Mobile Experience',
        'startTime': '2015-06-11 16:25:00',
        'endTime': '2015-06-11 17:15:00',
        'description': '',
        'topic': 'vcs',
        'moderator': '',
        'speakers': [
          {
            'id': 17,
            'firstname': 'Tim',
            'lastname': 'Chang',
            'company': 'Mayfield',
            'title': 'Managing Director',
            'bio': '<p>"I’ve learned a lot about teamwork from the three bands I perform with. Each member should possess a unique voice and super-power, but only when the collective is comprised of complementary talents does real magic occur. The same dynamic applies for building startups and venture investing."</p><p>I\'m currently championing:</p><ul><li>3D Robotics: The world pioneer in unmanned aerial vehicle (UAV) drone platforms</li><li>fitmob: Re-inventing the gym through local social group workouts</li><li>HealthTap: Mobile-first doctor-patient community and on-demand health services</li><li>Lantern: Online programs and coaching that strengthen your emotional well-being</li><li>Massdrop: Massdrop is building an online community for enthusiasts.</li><li>Moat: Brand analytics and intelligence SaaS platform</li><li>OUYA: Android-powered video game microconsole and community</li><li>Syntertainment: Stealth company from the creator of SimCity, the Sims and Spore</li><li>Zirtual: Virtual assistant services marketplace</li></ul><p>Some of my notable successes:</p><ul><li>AdChina: Acquired by Alibaba</li><li>Basis: The industry’s most advanced wearable health tracker (acquired by Intel in 2014)</li><li>Iridigm: Revolutionary MEMS-based reflective displays (acquired by Qualcomm)</li><li>ngMoco: Early leader in mobile social gaming (acquired by DeNA)</li><li>Playdom: One of the first three big social game publishers (acquired by Disney)</li></ul><p>Tim’s pre-Mayfield investments include:</p><ul><li>Lumosity: Leader in brain training and mental fitness</li><li>PCH International: Virtualized design, manufacturing, and logistics services for next-generation connected devices</li></ul><p>Awards & recognition:</p><ul><li>One of “Top 100 Tech Investors” on Forbes Midas list in 2011 & 2012</li><li>One of “12 Most Influential Tech Investors” by CNET</li><li>Always On Digital Media & Mobile Power Player</li><li>Gamification Summit award for Special Achievement in the Industry</li></ul>',
            'twitter': ''
          }
        ],
        'format': 'Panel'
      }, {
        'title': 'Networking Reception',
        'startTime': '2015-06-11 17:15:00',
        'endTime': '2015-06-11 18:30:00',
        'description': '',
        'topic': '',
        'moderator': '',
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
