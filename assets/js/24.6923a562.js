(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{359:function(e,t,a){"use strict";a.r(t);var s=a(32),n=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"extended-lifecycle-support-for-languages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-lifecycle-support-for-languages","aria-hidden":"true"}},[e._v("#")]),e._v(" Extended Lifecycle Support for Languages")]),e._v(" "),a("h2",{attrs:{id:"extended-lifecycle-support-for-php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extended-lifecycle-support-for-php","aria-hidden":"true"}},[e._v("#")]),e._v(" Extended Lifecycle Support for PHP")]),e._v(" "),a("p",[e._v("Extended Lifecycle Support (ELS) for PHP from TuxCare provides security fixes for PHP versions that have reached their end-of-life. This allows you to continue running your Linux server vulnerability-free.")]),e._v(" "),a("p",[e._v("If you want support for other versions of distributions, simply add the other packages to the support covered by your SLA. If you have any questions please read our "),a("a",{attrs:{href:"https://tuxcare.com/faq/",target:"_blank",rel:"noopener noreferrer"}},[e._v("FAQ’s section"),a("OutboundLink")],1),e._v(". For suggestions, please contact "),a("a",{attrs:{href:"mailto:sales@cloudlinux.com"}},[e._v("sales@tuxcare.com")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"supported-os"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-os","aria-hidden":"true"}},[e._v("#")]),e._v(" Supported OS")]),e._v(" "),a("p",[e._v("TuxCare provides Extended Lifecycle Support through four years after the EOL date.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[e._v("OS")]),e._v(" "),a("th",{staticStyle:{"text-align":"center"}},[e._v("Version")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("CentOS, CloudLinux, OracleLinux, etc.")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("6.x 64-bit, 7.x 64-bit, 8.x 64-bit")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("AlmaLinux")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("8.x 64-bit")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[e._v("Ubuntu")]),e._v(" "),a("td",{staticStyle:{"text-align":"center"}},[e._v("16.04 64-bit, 18.04 64-bit, 20.04 64-bit")])])])]),e._v(" "),a("h3",{attrs:{id:"supported-versions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#supported-versions","aria-hidden":"true"}},[e._v("#")]),e._v(" Supported versions.")]),e._v(" "),a("p",[a("strong",[e._v("CentOS, CloudLinux, AlmaLinux, Oracle Linux, etc.:")]),e._v(" 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1")]),e._v(" "),a("p",[a("strong",[e._v("Ubuntu:")]),e._v(" 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1")]),e._v(" "),a("h3",{attrs:{id:"installation-instructions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-instructions","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation instructions")]),e._v(" "),a("h4",{attrs:{id:"rhel-based-systems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rhel-based-systems","aria-hidden":"true"}},[e._v("#")]),e._v(" RHEL based systems")]),e._v(" "),a("ol",[a("li",[e._v("Download an installer script:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget https://repo.cloudlinux.com/php-els/install-php-els-repo.sh\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Run the installer script with keys. The installation script registers the server in the CLN with the key, adds the yum repository, and adds a PGP key to the server.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sh install-php-els-repo.sh --license-key XXX-XXXXXXXXXXXX\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Verify that the installation was successful.")])]),e._v(" "),a("p",[e._v("To ensure the installation has been completed successfully, run the following command. It should return the info about an available package. If you see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular yum upgrade command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum info alt-php73\n\nAvailable Packages\nName        : alt-php73\nArch        : x86_64\nEpoch       : 1\nVersion     : 7.3.33\nRelease     : 5.2.el7\nSize        : 22 k\nRepo        : php-els/7\nSummary     : PHP scripting language for creating dynamic web sites\nURL         : http://www.php.net/\nLicense     : PHP and LGPLv2 and LGPLv2+\nDescription : PHP is an HTML-embedded scripting language.\n")])])]),a("p",[a("strong",[e._v("How to install packages:")])]),e._v(" "),a("ul",[a("li",[e._v("Each version of PHP individually or all versions at once can be installed.")]),e._v(" "),a("li",[e._v("Standard commands to install each version separately can be used. For example, installing alt-php73:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum install alt-php73*\n")])])]),a("p",[e._v("To install all versions at the same time, use group:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("yum groupinstall alt-php\n")])])]),a("h4",{attrs:{id:"ubuntu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu","aria-hidden":"true"}},[e._v("#")]),e._v(" Ubuntu")]),e._v(" "),a("p",[e._v("Download an installer script:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget https://repo.cloudlinux.com/php-els/install-php-els-ubuntu-repo.sh\n")])])]),a("p",[e._v("Run the installer script with keys:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("bash install-php-els-ubuntu-repo.sh --license-key XXX-XXXXXXXXXXXX\n")])])]),a("p",[e._v("Verify that the installation was successful. To ensure that installation has been completed successfully, run the following command. It should return the info about an available package. If you see information about the package, you can be sure that the installation was successful. After this, you will be able to install updates from the repository using a regular apt upgrade command.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apt-cache show alt-php73-cli\n\nPackage: alt-php73-cli\nSource: php\nVersion: 7.3.18-1\nArchitecture: amd64\nMaintainer: Sergey Fokin <sfokin@cloudlinux.com>\nInstalled-Size: 51694\nDepends: libbz2-1.0, libc6 (>= 2.14), libcurl3 (>= 7.44.0), libgmp10, libreadline6 (>= 6.0), libssl1.0.0 (>= 1.0.2~beta3), libsystemd0, libxml2 (>= 2.9.0), zlib1g (>= 1:1.1.4), alt-php73-common (= 7.3.18-1), libcurl4-openssl-dev, libnghttp2-14\nHomepage: http://www.php.net/\nPriority: optional\nSection: libs\nFilename: pool/main/p/php/alt-php73-cli_7.3.18-1_amd64.deb\nSize: 10247916\nSHA256: 6f107e60684695b6261871a5540c4742eb6e86befe767ab313d1eacda023e5bb\nSHA1: e8e7d6ab06470cbda5f5ef65a48c7c527ff52e9b\nMD5sum: d6c664d4f4b229c1e6727804888f6079\nDescription: command-line interpreter for the PHP scripting language.\nDescription-md5: 0d83f7bf7177d3376a59b73890c8494d\n")])])]),a("p",[a("strong",[e._v("How to install packages:")])]),e._v(" "),a("ul",[a("li",[e._v("Each version of PHP individually or all versions at once can be installed.")]),e._v(" "),a("li",[e._v("Standard commands to install each version separately can be used. For example, installing alt-php73:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apt-get install alt-php73*\n")])])]),a("p",[e._v("To install all versions at the same time, it is necessary to use the alt-php meta-package:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("apt-get install alt-php\n")])])])])},[],!1,null,null,null);t.default=n.exports}}]);