# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [21.4.2] (unreleased)
### Added
### Changed
- Changed defaults for installation locations [#3045](https://github.com/greenbone/gsa/pull/3045)
  - LOCALSTATEDIR is /var by default now
  - SYSCONFDIR is /etc by default now
  - GVM_RUN_DIR and GSAD_PID_DIR are /run/gvm by default now
  - SYSTEMD_SERVICE_DIR is /lib/systemd/system by default now

### Deprecated
### Removed
- Removed gsad.default file and adjusted gsad.service file accordingly.
  Packagers should patch gsad.service file to adjust it on their requirements or
  just ship their own [#3045](https://github.com/greenbone/gsa/pull/3045)

### Fixed
- Initialize severity value with 0 in powerfilter SeverityValuesGroup [#3031](https://github.com/greenbone/gsa/pull/3031)

[Unreleased]: https://github.com/greenbone/gsa/compare/v21.4.1...gsa-21.04

## [21.4.1] - 2021-06-25

### Added
- Added SSH Elevate credential to target row [#2996](https://github.com/greenbone/gsa/pull/2996)
- Added isDeprecated() method to NVT model and use it in details [#2960](https://github.com/greenbone/gsa/pull/2960)
- Added @testing-library/user-event as a dev-dependency [#2891](https://github.com/greenbone/gsa/pull/2891)
- Set SameSite=strict for the session cookie to avoid CSRF [#2948](https://github.com/greenbone/gsa/pull/2948)

### Changed
- Disallow using the same credential for ssh and elevate credential in targets [#2994](https://github.com/greenbone/gsa/pull/2994)
- Properly space and linebreak roles and groups in users table row [#2949](https://github.com/greenbone/gsa/pull/2949)
- Make HorizontalSep component wrappable [#2949](https://github.com/greenbone/gsa/pull/2949)
- Use greenbone sensor as default scanner type when opening the dialog if available [#2867](https://github.com/greenbone/gsa/pull/2867), [#2924](https://github.com/greenbone/gsa/pull/2924)

### Fixed
* Removed a CMake dependency in the CMakeLists, so GSA can be build again. [#3028](https://github.com/greenbone/gsa/pull/3028)
- Fall back to cvss_base when severity subelement is missing from NVT severities [#2944](https://github.com/greenbone/gsa/pull/2944)
- Fix loading NVT information in result details [#2934](https://github.com/greenbone/gsa/pull/2934)
- Fixed setting whether to include related resources for new permissions [#2931](https://github.com/greenbone/gsa/pull/2931)
- Fixed number-only names within schedules/dialog [#2914](https://github.com/greenbone/gsa/pull/2914)
- Fixed changing Trend and Select for NVT-families and whole selection only [#2905](https://github.com/greenbone/gsa/pull/2905)
- Fixed missing name for CVE results on result detailspage [#2892](https://github.com/greenbone/gsa/pull/2892)
- Fixed setting secret key in RADIUS dialog, backport from [#2891](https://github.com/greenbone/gsa/pull/2891), [#2915](https://github.com/greenbone/gsa/pull/2915)
- Fixed setting result UUID in notes dialog [#2889](https://github.com/greenbone/gsa/pull/2889)

[21.4.1]: https://github.com/greenbone/gsa/compare/v21.4.0...v21.4.1

## [21.4.0] - 2021-04-16

### Added
- Allow to add ssh elevate credential to target dialog and display elevate credential in details [#2954](https://github.com/greenbone/gsa/pull/2954)
- Allow to set unix socket permissions for gsad [#2816](https://github.com/greenbone/gsa/pull/2816)
- Added CVSS date to NVT details [#2802](https://github.com/greenbone/gsa/pull/2802)
- Added option to allow to scan simultaneous IPs to targets
  [#2779](https://github.com/greenbone/gsa/pull/2779),
  [#2813](https://github.com/greenbone/gsa/pull/2813)
- Added CVSS origin to NVT details [#2588](https://github.com/greenbone/gsa/pull/2588)
- Added the CVSS v3.1 BaseScore calculator to the `/cvsscalculator` page in the Help section. [#2536](https://github.com/greenbone/gsa/pull/2536)

### Changed
- Don't show word cloud as default in result dashboard [#2883](https://github.com/greenbone/gsa/pull/2883)
- Sort host, os and vulns listpage by descending severity [#2880](https://github.com/greenbone/gsa/pull/2880)
- Revert the changes from integer `score` to a float `severity` [#2854](https://github.com/greenbone/gsa/pull/2854)
- Show StartIcon for scheduled tasks [#2840](https://github.com/greenbone/gsa/pull/2840)
- Remove solution from log NVTs [#2792](https://github.com/greenbone/gsa/pull/2792)
- Don't show empty sections in result details [#2791](https://github.com/greenbone/gsa/pull/2791)
- Move error message and adjust design on login page [#2780](https://github.com/greenbone/gsa/pull/2780)
- Refactored useFormValidation hook [#2704](https://github.com/greenbone/gsa/pull/2704)
- Updated copyright and footer layout [#2687](https://github.com/greenbone/gsa/pull/2687)
- New login page layout
  [#2683](https://github.com/greenbone/gsa/pull/2683),
  [#2736](https://github.com/greenbone/gsa/pull/2736),
  [#2756](https://github.com/greenbone/gsa/pull/2756)
- CVE Tables Page can now be used with the updated xml-format and CVSSv3(.1). [#2583](https://github.com/greenbone/gsa/pull/2583)
- The CVSS v2 BaseScore calculator calculates the score on the client side now. [#2536](https://github.com/greenbone/gsa/pull/2536)

### Fixed
- Fixed dynamic severity checkbox not being checked upon clicking [#2882](https://github.com/greenbone/gsa/pull/2882)
- Fixed result CVE parsing for result listpage and CVE reports [#2869](https://github.com/greenbone/gsa/pull/2869)
- Fixed setting comments of business process nodes [#2781](https://github.com/greenbone/gsa/pull/2781)
- Added the deprecatedBy field to CPEs [#2751](https://github.com/greenbone/gsa/pull/2751)
- Fixed the severity for different advisories [#2611](https://github.com/greenbone/gsa/pull/2611)

### Removed
- Removed Edge <= 18 support [#2691](https://github.com/greenbone/gsa/pull/2691)
- Removed Internet Explorer 11 support [#2689](https://github.com/greenbone/gsa/pull/2689)
- Removed support for uncontrolled form fields [#2520](https://github.com/greenbone/gsa/pull/2520)
- Drop gmp scanner type from GSA [#2498](https://github.com/greenbone/gsa/pull/2498)
- Removed filter element "autofp" [#2480](https://github.com/greenbone/gsa/pull/2480)
- Drop dynamic severity classes [#2448](https://github.com/greenbone/gsa/pull/2448)

[21.4.0]: https://github.com/greenbone/gsa/compare/gsa-20.08...v21.4.0
