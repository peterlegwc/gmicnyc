'use strict';

/**
 * @ngdoc service
 * @name gmicnycApp.topicsFactory
 * @description
 * # topicsFactory
 * Factory in the gmicnycApp.
 */
angular.module('gmicnycApp')
  .factory('topicsFactory', function () {
    var topics = {
      'engagement': {
        'topicId': 0,
        'title': 'Using Mobile to Deepen Customer Engagement',
        'desc': 'The close bond mobile users have with their devices gives brands the chance to resonate emotionally with customers. But just getting your message heard among the thousands vying for consumer’s attention can be a huge challenge. At GMIC NYC you’ll get the inside scoop from brands that have figured out how to rise above the noise by creating groundbreaking customer experiences.',
        'icon': 'users'
      },
      'omnichannel': {
        'topicId': 1,
        'title': 'Transform the Customer Journey with an Omnichannel Approach',
        'desc': 'Creating a truly personalized customer experience that seamlessly spans digital and brick-and-mortar is now possible. The journey might start on desktop, but an evolving and aspirational message winding its way through a customer’s day has tremendous guiding influence. Learn how to move beyond a multichannel strategy by mastering an omnichannel approach that elevates your customer experience to new heights.',
        'icon': 'puzzle-piece'
      },
      'vcs': {
        'topicId': 2,
        'title': 'VC Perspectives',
        'desc': 'Investors from Sand Hill Road to Wall Street are making more big bets on billion dollars ideas than ever before. Investors will square off on what makes a great startup, a great exit and a great public company. To be sure, creating an unbeatable customer experience is the key ingredient to success.',
        'icon': 'line-chart'
      },
      'beacons': {
        'topicId': 3,
        'title': 'Making Beacons Work for You',
        'desc': 'Beacon triggered marketing is a relatively new but highly effective way to deliver the right message to the right customer at exactly the right time. Targeting moving customers with location technology promises to boost retail sales but also adds a layer of complexity to customer relationships. Join this panel session led by early adopters to discover potential ways beacons can help you monetize your mobile audience, increase engagement with mobile users and enhance the shopping experience.',
        'icon': 'map-marker'
      },
      'wallet': {
        'topicId': 4,
        'title': 'Mobile Wallet: It\'s Not Just About Payments',
        'desc': 'Mobile wallets can support exciting new functionality that could never be offered by a leather wallet - including automatic loyalty point redemptions and location-based marketing offers. Mobile wallets promise to transform much more than just payments: they provide a customizable platform for merchants and financial institutions to create richer customer experiences and foster deeper client engagement.',
        'icon': 'mobile'
      },
      'millennials': {
        'topicId': 5,
        'title': 'Millennials: Participating in the Brand Experience',
        'desc': 'This is truly the first generation to grow up completely online and as a result, the marketing mix used to target them needs to evolve. Millennials want to interact with brands, to co-create products and to participate in the brand experience. How do you best serve an autonomous, responsive, tech savvy population? These 80 million U.S. customers will soon have the most spending power and engaging them on mobile is a must.',
        'icon': 'child'
      }
    };

    var factory = {};
    factory.getAll = function() {
      return topics;
    };
    factory.getAllArr = function() {
      var arr = [];
      angular.forEach(topics, function (val, key) {
        arr.push(val);
      });
      return arr;
    };
    return factory;

  });
