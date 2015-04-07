'use strict';

/**
 * @ngdoc function
 * @name gmicnycApp.controller:ScheduleCtrl
 * @description
 * # ScheduleCtrl
 * Controller of the gmicnycApp
 */
angular.module('gmicnycApp')
  .controller('ScheduleCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.agenda = [
      {
        'title': 'Opening',
        'startTime': '2015-06-11 09:30:00',
        'endTime': '2015-06-11 09:35:00',
        'description': '',
        'topic': '',
        'moderator': '',
        'speakers': '',
        'format': 'Event',
        'tag': 'event'
      }, {
        'title': 'Brands and Customer Engagement',
        'startTime': '2015-06-11 10:00:00',
        'endTime': '2015-06-11 10:50:00',
        'description': 'The close bond mobile users have with their devices gives brands the chance to resonate emotionally with customers. But just getting your message heard among the thousands vying for consumer’s attention can be a huge challenge. In this session, you’ll get the inside scoop from brands that have figured out how to rise above the noise by creating groundbreaking customer experiences.',
        'topic': 'Using Mobile to Deepen Customer Engagement',
        'moderator': '',
        'speakers': [
          {
            'firstname': 'David',
            'lastname': 'Berkowitz',
            'company': 'MRY',
            'title': 'Chief Marketing Officer',
            'picture': '/images/speakers/david-berkowitz.jpg',
            'bio': 'David Berkowitz is Chief Marketing Officer at agency MRY, a division of Publicis Groupe, where he directs the agency\'s communications and gains visibility for clients such as Visa, Johnson & Johnson, and Coca-Cola. Previously, he spent seven years at 360i, serving as Vice President of Emerging Media; he co-founded its social media practice and led its Startup Outlook initiative. David has contributed more than 500 columns to outlets such as Ad Age, MediaPost, and Mashable, and he has penned his blog MarketersStudio.com since 2005. He has spoken at more than 250 events globally, including a commencement address at his alma mater, Binghamton University.'
          },{
            'firstname': 'Teal',
            'lastname': 'Newland',
            'company': 'StumbleUpon',
            'title': 'VP of Marketing, Revenue, Partnerships',
            'picture': '/images/speakers/teal-newland.jpg',
            'bio': ''
          },{
            'firstname': 'Jeff',
            'lastname': 'Arbour',
            'company': 'Plyfe',
            'title': 'Co-founder & CMO',
            'picture': '/images/speakers/jeff-arbour.jpg',
            'bio': ''
          }
        ],
        'format': 'Panel',
        'tag': 'engagement'
      }, {
        'title': 'Coffee Break',
        'startTime': '2015-06-11 10:50:00',
        'endTime': '2015-06-11 11:10:00',
        'description': '20 minute coffee break',
        'topic': 'Break',
        'moderator': '',
        'speakers': '',
        'format': 'Break',
        'tag': 'break'
      }, {
        'title': 'All About Timing? Pieces to the Contextualization Puzzle',
        'startTime': '2015-06-11 11:10:00',
        'endTime': '2015-06-11 12:00:00',
        'description': 'Creating a truly personalized customer experience that seamlessly spans digital and brick-and-mortar is now possible. The journey might start on desktop, but an evolving and aspirational message winding its way through a customer’s day has tremendous guiding influence. Learn how to move beyond a multichannel strategy by mastering an omnichannel approach that elevates your customer experience to new heights.',
        'topic': 'Contextualization, Omni-channel, User Experience, Personlization, Multi-channel',
        'moderator': {
          'firstname': 'Yev',
          'lastname': 'Galper',
          'company': 'EPAM',
          'title': 'Head of Mobile Competency Center',
          'picture': '/images/speakers/yev-galper.jpg',
          'bio': ''
        },
        'speakers': [
          {
            'firstname': 'Tyler',
            'lastname': 'McKinley',
            'company': 'MobileRQ',
            'title': 'CEO',
            'picture': '/images/speakers/tyler-mckinley.jpg',
            'bio': ''
          },{
            'firstname': 'Jill',
            'lastname': 'Wilson',
            'company': 'SGN',
            'title': 'SVP of Game Development',
            'picture': '/images/speakers/jill-wilson.jpg',
            'bio': ''
          },{
            'firstname': 'Nick',
            'lastname': 'Rockwell',
            'company': 'Condé Nast',
            'title': 'CTO',
            'picture': '/images/speakers/nick-rockwell.jpg',
            'bio': ''
          }
        ],
        'format': 'Panel',
        'tag': 'omnichannel'
      }, {
        'title': 'Lunch',
        'startTime': '2015-06-11 12:30:00',
        'endTime': '2015-06-11 13:15:00',
        'description': 'Lunch',
        'topic': 'Break',
        'moderator': '',
        'speakers': '',
        'format': 'Break',
        'tag': 'break'
      }, {
        'title': 'Making Beacons Work for You',
        'startTime': '2015-06-11 14:05:00',
        'endTime': '2015-06-11 14:55:00',
        'description': 'Beacon triggered marketing is a relatively new but highly effective way to deliver the right message to the right customer at exactly the right time. Targeting moving customers with location technology promises to boost retail sales but also adds a layer of complexity to customer relationships. Join this panel session led by early adopters to discover potential ways beacons can help you monetize your mobile audience, increase engagement with mobile users and enhance the shopping experience.',
        'topic': 'Beacons, Real Time Retail',
        'moderator': {
          'firstname': 'Dan',
          'lastname': 'Herman',
          'company': 'ChatID',
          'title': 'Founder & CEO',
          'picture': '/images/speakers/dan-herman.jpg',
          'bio': ''
        },
        'speakers': [
          {
            'firstname': 'Ryan',
            'lastname': 'Craver',
            'company': 'Lamour Group',
            'title': 'SVP Emerging Brands, Licensing & Digital',
            'picture': '/images/speakers/ryan-craver.jpg',
            'bio': 'Ryan\'s natural fascination with the intersection of retail and technology has led to a career of inspiring and leading retailers to be on the forefront of the evolving "connected retail" environment. Ryan enjoys tackling changing consumer dynamics and defining how retail organizations and brands can leverage technology to strengthen their competitive position. Ryan currently leads Emerging Brands, Licensing and Digital Strategy for Lamour Group\'s portfolio of global brands while advising several startups focused on Mobile and AdTech. Prior to joining Lamour, Ryan was in charge of the core department store strategy at Lord & Taylor / Hudson\'s Bay Company and was a senior leader at Accenture, driving growth and profit improvement across multiple clients, including Virgin Media, FedEx and Best Buy.'
          },{
            'firstname': 'Wesley',
            'lastname': 'Barrow',
            'company': 'Nomi',
            'title': 'Founder',
            'picture': '/images/speakers/wesley-barrow.jpg',
            'bio': ''
          }
        ],
        'format': 'Panel',
        'tag': 'beacons'
      }, {
        'title': 'Marketing to Millenials: The Holy Grail',
        'startTime': '2015-06-11 15:30:00',
        'endTime': '2015-06-11 16:20:00',
        'description': 'This is truly the first generation to grow up completely online and as a result, the marketing mix used to target them needs to evolve. Millennials want to interact with brands, to co-create products and to participate in the brand experience. How do you best serve an autonomous, responsive, tech savvy population? These 80 million U.S. customers will soon have the most spending power and engaging them on mobile is a must.',
        'topic': 'Millennials: Participating in the Brand Experience',
        'moderator': '',
        'speakers': [
          {
            'firstname': 'Ryan',
            'lastname': 'Matzner',
            'company': 'Fueled',
            'title': 'Director & Chief Strategist',
            'picture': '/images/speakers/ryan-matzner.jpg',
            'bio': 'Ryan Matzner is the Director of Strategy at Fueled, a mobile design and development shop based in NYC and London. He has a decade of online and mobile marketing experience, working with clients such as American Express, Condé Nast, Ideeli, Thrillist, HBO, QuizUp, Barneys, and Gilt Groupe. He can be found on Facebook, Twitter, LinkedIn and Google+.'
          }
        ],
        'format': 'Panel',
        'tag': 'millenials'
      }, {
        'title': 'Coffee Break',
        'startTime': '2015-06-11 16:20:00',
        'endTime': '2015-06-11 16:40:00',
        'description': '20 minute coffee break',
        'topic': 'Break',
        'moderator': '',
        'speakers': '',
        'format': 'Break',
        'tag': 'break'
      }, {
        'title': 'San Hill Road to Wall Street: VC Perspectives',
        'startTime': '2015-06-11 16:40:00',
        'endTime': '2015-06-11 17:30:00',
        'description': 'Investors from Sand Hill Road to Wall Street are making more big bets on billion dollars ideas than ever before. In this session, investors square off on what makes a great startup, a great exit and a great public company. To be sure, creating an unbeatable customer experience is the key ingredient to success.',
        'topic': 'VCs Perspectives on What Makes a Company Great',
        'moderator': '',
        'speakers': '',
        'format': 'Panel',
        'tag': 'vcs'
      }
    ];
    $scope.parseDate = function(mySqlDate) {
      var d = mySqlDate.split(/[- :]/);
      return new Date(d[0], d[1]-1, d[2], d[3] || 0, d[4] || 0, d[5] || 0);
    };
    $scope.toggleDesc = function() {
      this.session.show = !this.session.show;
    };
  });
