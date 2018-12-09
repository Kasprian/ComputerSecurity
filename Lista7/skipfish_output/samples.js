var mime_samples = [
  { 'mime': 'application/xhtml+xml', 'samples': [
    { 'url': 'http://localhost/bank/', 'dir': '_m0/0', 'linked': 2, 'len': 644 },
    { 'url': 'http://localhost/phpmyadmin/', 'dir': '_m0/1', 'linked': 2, 'len': 86991 },
    { 'url': 'http://localhost/09/', 'dir': '_m0/2', 'linked': 0, 'len': 320 },
    { 'url': 'http://localhost/dashboard/images/', 'dir': '_m0/3', 'linked': 2, 'len': 7472 },
    { 'url': 'http://localhost/dashboard/javascripts/', 'dir': '_m0/4', 'linked': 2, 'len': 1141 },
    { 'url': 'http://localhost/dashboard/stylesheets/', 'dir': '_m0/5', 'linked': 2, 'len': 1565 },
    { 'url': 'http://localhost/dashboard/phpinfo.php', 'dir': '_m0/6', 'linked': 2, 'len': 97326 },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'dir': '_m0/7', 'linked': 0, 'len': 356 },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'dir': '_m0/8', 'linked': 1, 'len': 1193 },
    { 'url': 'http://localhost/phpmyadmin/changelog.php', 'dir': '_m0/9', 'linked': 2, 'len': 64110 },
    { 'url': 'http://localhost/phpmyadmin/themes.php', 'dir': '_m0/10', 'linked': 2, 'len': 8452 },
    { 'url': 'http://localhost/phpmyadmin/index.php?db=&table=&server=1&target=', 'dir': '_m0/11', 'linked': 2, 'len': 94383 },
    { 'url': 'http://localhost/phpmyadmin/?lang=.htpasswd', 'dir': '_m0/12', 'linked': 0, 'len': 93362 },
    { 'url': 'http://localhost/.htpasswd.sfish', 'dir': '_m0/13', 'linked': 0, 'len': 1021 },
    { 'url': 'http://localhost/applications.html', 'dir': '_m0/14', 'linked': 2, 'len': 3607 } ]
  },
  { 'mime': 'text/html', 'samples': [
    { 'url': 'http://localhost/dashboard/', 'dir': '_m1/0', 'linked': 2, 'len': 7575 },
    { 'url': 'http://localhost/dashboard/faq.html', 'dir': '_m1/1', 'linked': 2, 'len': 20624 },
    { 'url': 'http://localhost/dashboard/howto.html', 'dir': '_m1/2', 'linked': 2, 'len': 5972 } ]
  },
  { 'mime': 'text/plain', 'samples': [
    { 'url': 'http://localhost/phpmyadmin/ChangeLog', 'dir': '_m2/0', 'linked': 0, 'len': 22053 },
    { 'url': 'http://localhost/phpmyadmin/license.php', 'dir': '_m2/1', 'linked': 2, 'len': 18092 } ]
  }
];

var issue_samples = [
  { 'severity': 3, 'type': 40201, 'samples': [
    { 'url': 'http://localhost/dashboard/', 'extra': '//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.1.0/css/font-awesome.min.css', 'sid': '0', 'dir': '_i0/0' },
    { 'url': 'http://localhost/dashboard/', 'extra': '//code.jquery.com/jquery-1.10.2.min.js', 'sid': '0', 'dir': '_i0/1' },
    { 'url': 'http://localhost/dashboard/faq.html', 'extra': '//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.1.0/css/font-awesome.min.css', 'sid': '0', 'dir': '_i0/2' },
    { 'url': 'http://localhost/dashboard/faq.html', 'extra': '//code.jquery.com/jquery-1.10.2.min.js', 'sid': '0', 'dir': '_i0/3' },
    { 'url': 'http://localhost/dashboard/howto.html', 'extra': '//cdnjs.cloudflare.com/ajax/libs/font-awesome/3.1.0/css/font-awesome.min.css', 'sid': '0', 'dir': '_i0/4' },
    { 'url': 'http://localhost/dashboard/howto.html', 'extra': '//code.jquery.com/jquery-1.10.2.min.js', 'sid': '0', 'dir': '_i0/5' } ]
  },
  { 'severity': 2, 'type': 30909, 'samples': [
    { 'url': 'http://localhost/dashboard/phpinfo.php', 'extra': 'phpinfo() page', 'sid': '11001', 'dir': '_i1/0' } ]
  },
  { 'severity': 2, 'type': 30701, 'samples': [
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'conflicting \x27Expires\x27 and \x27Pragma\x27', 'sid': '0', 'dir': '_i2/0' },
    { 'url': 'http://localhost/phpmyadmin/changelog.php', 'extra': 'conflicting \x27Expires\x27 and \x27Pragma\x27', 'sid': '0', 'dir': '_i2/1' },
    { 'url': 'http://localhost/phpmyadmin/changelog.php?lang=9876sfi', 'extra': 'conflicting \x27Expires\x27 and \x27Pragma\x27', 'sid': '0', 'dir': '_i2/2' },
    { 'url': 'http://localhost/phpmyadmin/themes.php', 'extra': 'conflicting \x27Expires\x27 and \x27Pragma\x27', 'sid': '0', 'dir': '_i2/3' },
    { 'url': 'http://localhost/phpmyadmin/?lang=9876sfi', 'extra': 'conflicting \x27Expires\x27 and \x27Pragma\x27', 'sid': '0', 'dir': '_i2/4' },
    { 'url': 'http://localhost/phpmyadmin/?lang=.cvsignore', 'extra': 'conflicting \x27Expires\x27 and \x27Pragma\x27', 'sid': '0', 'dir': '_i2/5' },
    { 'url': 'http://localhost/phpmyadmin/?lang=.htpasswd', 'extra': 'conflicting \x27Expires\x27 and \x27Pragma\x27', 'sid': '0', 'dir': '_i2/6' } ]
  },
  { 'severity': 2, 'type': 30601, 'samples': [
    { 'url': 'http://localhost/phpmyadmin/index.php?db=&table=&server=1&target=&lang=en', 'extra': '', 'sid': '0', 'dir': '_i3/0' },
    { 'url': 'http://localhost/phpmyadmin/index.php?db=&table=&server=1&target=', 'extra': '', 'sid': '0', 'dir': '_i3/1' },
    { 'url': 'http://localhost/phpmyadmin/index.php?db=&table=&server=1&target=', 'extra': '', 'sid': '0', 'dir': '_i3/2' },
    { 'url': 'http://localhost/phpmyadmin/index.php?db=&table=&server=1&target=', 'extra': '', 'sid': '0', 'dir': '_i3/3' },
    { 'url': 'http://localhost/phpmyadmin/index.php?db=&table=&server=1&target=', 'extra': '', 'sid': '0', 'dir': '_i3/4' },
    { 'url': 'http://localhost/phpmyadmin/index.php?db=&table=&server=1&target=', 'extra': '', 'sid': '0', 'dir': '_i3/5' } ]
  },
  { 'severity': 1, 'type': 20102, 'samples': [
    { 'url': 'http://localhost/_admin', 'extra': 'Child node limit exceeded', 'sid': '0', 'dir': '_i4/0' } ]
  },
  { 'severity': 0, 'type': 10901, 'samples': [
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': '', 'sid': '0', 'dir': '_i5/0' } ]
  },
  { 'severity': 0, 'type': 10803, 'samples': [
    { 'url': 'http://localhost/dashboard/', 'extra': '', 'sid': '0', 'dir': '_i6/0' },
    { 'url': 'http://localhost/dashboard/faq.html', 'extra': '', 'sid': '0', 'dir': '_i6/1' },
    { 'url': 'http://localhost/dashboard/howto.html', 'extra': '', 'sid': '0', 'dir': '_i6/2' },
    { 'url': 'http://localhost/phpmyadmin/ChangeLog', 'extra': '', 'sid': '0', 'dir': '_i6/3' } ]
  },
  { 'severity': 0, 'type': 10802, 'samples': [
    { 'url': 'http://localhost/phpmyadmin/license.php', 'extra': 'text/plain', 'sid': '0', 'dir': '_i7/0' } ]
  },
  { 'severity': 0, 'type': 10801, 'samples': [
    { 'url': 'http://localhost/phpmyadmin/ChangeLog', 'extra': 'text/plain', 'sid': '0', 'dir': '_i8/0' } ]
  },
  { 'severity': 0, 'type': 10602, 'samples': [
    { 'url': 'http://localhost/bank/zaloguj.php', 'extra': '', 'sid': '0', 'dir': '_i9/0' } ]
  },
  { 'severity': 0, 'type': 10505, 'samples': [
    { 'url': 'http://localhost/bank/', 'extra': 'haslo', 'sid': '0', 'dir': '_i10/0' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'NavigationLogoLinkWindow', 'sid': '0', 'dir': '_i10/1' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'NavigationTreeDefaultTabTable', 'sid': '0', 'dir': '_i10/2' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'NavigationTreeDefaultTabTable2', 'sid': '0', 'dir': '_i10/3' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'collation_connection', 'sid': '0', 'dir': '_i10/4' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'lang', 'sid': '0', 'dir': '_i10/5' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'set_theme', 'sid': '0', 'dir': '_i10/6' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'set_fontsize', 'sid': '0', 'dir': '_i10/7' } ]
  },
  { 'severity': 0, 'type': 10405, 'samples': [
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': '', 'sid': '0', 'dir': '_i11/0' },
    { 'url': 'http://localhost/phpmyadmin/ChangeLog', 'extra': '', 'sid': '0', 'dir': '_i11/1' },
    { 'url': 'http://localhost/phpmyadmin/?lang=.cvsignore', 'extra': '', 'sid': '0', 'dir': '_i11/2' },
    { 'url': 'http://localhost/phpmyadmin/?lang=.htpasswd', 'extra': '', 'sid': '0', 'dir': '_i11/3' },
    { 'url': 'http://localhost/phpmyadmin/?lang=0', 'extra': '', 'sid': '0', 'dir': '_i11/4' },
    { 'url': 'http://localhost/phpmyadmin/?lang=2008', 'extra': '', 'sid': '0', 'dir': '_i11/5' },
    { 'url': 'http://localhost/.htpasswd', 'extra': '', 'sid': '0', 'dir': '_i11/6' },
    { 'url': 'http://localhost/.htpasswd.sfish', 'extra': '', 'sid': '0', 'dir': '_i11/7' } ]
  },
  { 'severity': 0, 'type': 10404, 'samples': [
    { 'url': 'http://localhost/dashboard/images/', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i12/0' },
    { 'url': 'http://localhost/dashboard/javascripts/', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i12/1' },
    { 'url': 'http://localhost/dashboard/stylesheets/', 'extra': 'Directory listing', 'sid': '0', 'dir': '_i12/2' } ]
  },
  { 'severity': 0, 'type': 10401, 'samples': [
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': '', 'sid': '0', 'dir': '_i13/0' },
    { 'url': 'http://localhost/.htpasswd', 'extra': '', 'sid': '0', 'dir': '_i13/1' },
    { 'url': 'http://localhost/.htpasswd.sfish', 'extra': '', 'sid': '0', 'dir': '_i13/2' } ]
  },
  { 'severity': 0, 'type': 10205, 'samples': [
    { 'url': 'http://localhost/sfi9876', 'extra': '', 'sid': '0', 'dir': '_i14/0' },
    { 'url': 'http://localhost/phpmyadmin/sfi9876.pl', 'extra': '', 'sid': '0', 'dir': '_i14/1' } ]
  },
  { 'severity': 0, 'type': 10204, 'samples': [
    { 'url': 'http://localhost/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i15/0' },
    { 'url': 'http://localhost/09/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i15/1' },
    { 'url': 'http://localhost/dashboard/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i15/2' },
    { 'url': 'http://localhost/dashboard/phpinfo.php', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i15/3' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'X-ob_mode', 'sid': '0', 'dir': '_i15/4' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i15/5' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'X-Content-Security-Policy', 'sid': '0', 'dir': '_i15/6' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'X-WebKit-CSP', 'sid': '0', 'dir': '_i15/7' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'X-XSS-Protection', 'sid': '0', 'dir': '_i15/8' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i15/9' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'X-Permitted-Cross-Domain-Policies', 'sid': '0', 'dir': '_i15/10' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'X-Robots-Tag', 'sid': '0', 'dir': '_i15/11' },
    { 'url': 'http://localhost/phpmyadmin/01/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i15/12' },
    { 'url': 'http://localhost/phpmyadmin/01/', 'extra': 'X-ob_mode', 'sid': '0', 'dir': '_i15/13' },
    { 'url': 'http://localhost/phpmyadmin/01/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i15/14' },
    { 'url': 'http://localhost/phpmyadmin/01/', 'extra': 'X-Content-Security-Policy', 'sid': '0', 'dir': '_i15/15' },
    { 'url': 'http://localhost/phpmyadmin/01/', 'extra': 'X-WebKit-CSP', 'sid': '0', 'dir': '_i15/16' },
    { 'url': 'http://localhost/phpmyadmin/01/', 'extra': 'X-XSS-Protection', 'sid': '0', 'dir': '_i15/17' },
    { 'url': 'http://localhost/phpmyadmin/01/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i15/18' },
    { 'url': 'http://localhost/phpmyadmin/01/', 'extra': 'X-Permitted-Cross-Domain-Policies', 'sid': '0', 'dir': '_i15/19' },
    { 'url': 'http://localhost/phpmyadmin/01/', 'extra': 'X-Robots-Tag', 'sid': '0', 'dir': '_i15/20' },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i15/21' },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': 'X-ob_mode', 'sid': '0', 'dir': '_i15/22' },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i15/23' },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': 'X-Content-Security-Policy', 'sid': '0', 'dir': '_i15/24' },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': 'X-WebKit-CSP', 'sid': '0', 'dir': '_i15/25' },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': 'X-XSS-Protection', 'sid': '0', 'dir': '_i15/26' },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i15/27' },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': 'X-Permitted-Cross-Domain-Policies', 'sid': '0', 'dir': '_i15/28' },
    { 'url': 'http://localhost/phpmyadmin/access_log.1.cgi/', 'extra': 'X-Robots-Tag', 'sid': '0', 'dir': '_i15/29' },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'extra': 'X-Powered-By', 'sid': '0', 'dir': '_i15/30' },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'extra': 'X-ob_mode', 'sid': '0', 'dir': '_i15/31' },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'extra': 'X-Frame-Options', 'sid': '0', 'dir': '_i15/32' },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'extra': 'X-Content-Security-Policy', 'sid': '0', 'dir': '_i15/33' },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'extra': 'X-WebKit-CSP', 'sid': '0', 'dir': '_i15/34' },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'extra': 'X-XSS-Protection', 'sid': '0', 'dir': '_i15/35' },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'extra': 'X-Content-Type-Options', 'sid': '0', 'dir': '_i15/36' },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'extra': 'X-Permitted-Cross-Domain-Policies', 'sid': '0', 'dir': '_i15/37' },
    { 'url': 'http://localhost/phpmyadmin/vendor/', 'extra': 'X-Robots-Tag', 'sid': '0', 'dir': '_i15/38' } ]
  },
  { 'severity': 0, 'type': 10202, 'samples': [
    { 'url': 'http://localhost/', 'extra': 'Apache/2.4.37 (Unix) OpenSSL/1.0.2p PHP/7.2.12 mod_perl/2.0.8-dev Perl/v5.16.3', 'sid': '0', 'dir': '_i16/0' } ]
  },
  { 'severity': 0, 'type': 10201, 'samples': [
    { 'url': 'http://localhost/bank/', 'extra': 'PHPSESSID', 'sid': '0', 'dir': '_i17/0' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'phpMyAdmin', 'sid': '0', 'dir': '_i17/1' },
    { 'url': 'http://localhost/phpmyadmin/', 'extra': 'pma_lang', 'sid': '0', 'dir': '_i17/2' } ]
  }
];

