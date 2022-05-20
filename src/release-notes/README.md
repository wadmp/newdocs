# 2.4.3: May 25th, 2022

* This release contains mainly bug fixes, UI appearance changes, and some new improvements.

## Improvements:

*  The **Premium label** now disappears once the account is upgraded to Premium.

*  Added an option to export **Auditing logs** to the CSV file in the whole 3 Auditing sections.

 ![Auditing CSV Export](./2.4.3/auditing-csv-export.png "Auditing CSV Export") 

* **Pagination settings are now remembered when selected to 10, 20, 50 or 100. Affects all sections like Playbooks, Audit logs etc.**
![Pagination Remember](./2.4.3/pagination-remember.png "Pagination Remember")

* **Changed web UI date format to ISO standard (YYYY-MM-DD).**

![Date Format](./2.4.3/date-format.png "Date Format")

* **Company filter will now remember Its state until the User's logout.**

![Company Filter](./2.4.3/company-filter.png "Company Filter")

* **Changes to the "Install Router Apps" section:**

    **1. Removed the button to mark all apps.**

    **2. Sorted Router Apps alphabetically.**

    **3. Added a search box in Router Apps.**

    **4. Cancel and Install buttons are now visible.**

![Router Apps Search](./2.4.3/router-apps-search.png "Router Apps Search")

* **When searching for Companies in all forms, It will now be sorted alphabetically and autocomplete as you write down.**

![Company Search](./2.4.3/company-autocomplete.png "Company Search")

* **For everyone with more than 10 companies, there will be a search bar instead of the old filter.**



## UI:

* Fixed an issue where green dots in the **User's Permissions** section did not align correctly.

* Changed font from bold/regular text in DMP UI to the same way as on the My Device page section.

![Font Change](./2.4.3/font-change.png "Font Change")

* Aligned the top icon to the others, menu icon aligned with menu icons.

![Top Icon Align](./2.4.3/picture-07.png "Top Icon Align") 

* Added description tooltip for the inactive box.

![Description Tooltip](./2.4.3/picture-08.png "Description Tooltip") 

* Added the same space to the aggregated dashboard.

![Aggregated Dashboard](./2.4.3/picture-09.png "Aggregated Dashboard")

* Changed the icon to a classic filter icon.

![Classic Filter Icon](./2.4.3/picture-11.png "Classic Filter Icon") 

* Section on the picture aligned to the left.

![Left Section](./2.4.3/picture-12.png "Left Section") 

* Changed the icon to the classic filter icon on all 3 places in the Auditing section.

![Auditing Classic Filter](./2.4.3/picture-14.png "Auditing Classic Filter") 

* Changed the "Name" to the "Company Name".

![Company Name](./2.4.3/picture-16.png "Company Name") 

* Added the text "Press ESC for more options." to the Company dashboard.

![Escape Options](./2.4.3/escape-options.png "Escape Options") 

* Removed the link and tooltip text to the Grafana login page.

![Removed Link](./2.4.3/removed-link.png "Removed Link") 

* Changed the position of legend, which is now under the graphs.

![Graph Legend](./2.4.3/graph-legend.png "Graph Legend") 

* Changed text from MiBs to MBs everywhere in the GUI.

![MiBs Change](./2.4.3/mibs-change.png "MiBs Change") 

* Removed panels on top of the pages.

![Panel Removal](./2.4.3/panel-removal.png "Panel Removal") 

* Widened Router Apps version field to show whole version string of Router Apps.

![Router Apps Wide](./2.4.3/router-apps-wide.png "Router Apps Wide")

* Fixed format of Invoice Details PDF.

![Invoice Details PDF](./2.4.3/margin-invoice-details.png "Invoice Details PDF")


## Bugfixes:

* Only companies that are assigned to the User are now available.
* **Playbooks:** Applications are not displayed in the playbook app list if the "IsAggregate" parameter is set to true.
* Fixed an issue where an error message occurred and remained at the top of the form when creating a user with an already taken e-mail.
* **Auditing:** Fixed an issue where an event occurred sometimes, and the End Time hour filter won't show it.
* **Alerts:** Available devices are now shown, and the target types can be changed and saved.
* **Alerts:** Changing target type from single device to company can now be changed and saved.
* **SyncEngine:** Fixed error messages repeatedly reporting exceptions on Production MS Teams.

