'use strict';

angular.module('requirementsBazaarWebFrontendApp').config(function ($translateProvider) {
  $translateProvider.translations('en', {
    ACCEPT: 'Accept',
    ACCESS_DENIED: 'Access denied',
    BECOME_LEAD_DEV: 'Become a lead developer',
    CANCEL: 'cancel',
    CHOOSE_PROJECT: 'Choose project',
    COMMENT_PLACEHOLDER: 'Leave a comment',
    COMMENTS:'Comments',
    COMPONENT: 'Create component',
    COMPONENT_LEAD: 'Component lead:',
    CREATE: 'Create',
    CREATE_COMP: 'Create a component',
    CREATE_PROJ: 'Create a project',
    CREATE_REQ: 'Create a requirement',
    CREATED_BY: 'Created by',
    DECLINE: 'Decline',
    DEFAULT:'default',
    DELETE_COMP: 'Delete component',
    DELETE_PROJECT: 'Delete project',
    DELETE_REQUIREMENT: 'Delete requirement',
    DESC: 'Description',
    DEVELOP_REQUIREMENT: 'Develop requirement',
    DEVELOPERS: 'Developers',
    EDIT_REQUIREMENT: 'Edit requirement',
    EDIT_COMP: 'Edit component',
    EXIT_SETTINGS: 'Exit settings',
    FILTER_COMPONENTS: 'filter components',
    FILTER_PROJECTS: 'filter projects',
    FOLLOW_REQUIREMENT: 'Follow requirement',
    FOLLOWERS: 'Followers',
    GENERAL_SETTINGS:'General settings',
    HIDE: 'Hide',
    HIDE_CONTRIBUTORS: 'Hide contributors',
    LEADER: 'Leader',
    LOGIN: 'Login',
    MANAGE_USERS:'Manage users',
    MARK_AS_DONE: 'Mark as done',
    MARK_AS_UNDONE: 'reopen the requirement',
    PRIVATE: 'Private',
    PROJECT: 'Create project',
    PUBLIC:'Public',
    REALIZED_REQ: 'Show Realized',
    RECENT_CHANGES: 'Recent changes',
    RELOAD: 'Reload',
    REMOVE: 'remove',
    SAVE: 'save',
    SAVE_CHANGES: 'Save changes',
    SEARCH_PROJECTS: 'Search for projects',
    SEARCH_REQUIREMENTS: 'search requirements',
    SET_DEFAULT_COMP: 'Set as the default',
    SETTINGS:'Settings',
    SHOW_CONTRIBUTORS: 'Show contributors',
    SUBMIT:'Submit',
    TITLE: 'Title',
    TITLE_AND_DESCRIPTION:'Title and description',
    VISIBILITY: 'Visibility of the project',

    //Toast messages
    THANK_YOU:'Thank You',
    THANK_YOU_FOR_FOLLOWING: 'Thank you for following',
    THANK_FOR_INIT: 'Thank you for the initiative',
    EDIT_SUCCESSFUL: 'Edit was successful',
    WARN_NOT_IMPL: 'Warning: Not implemented',
    THANKS_FOR_FEEDBACK: 'Thanks for leaving feedback',
    ERROR_UNKNOWN: 'Error occurred, unknown reasons !',
    REFRESH_PLEASE: 'Please refresh the page !',
    WELCOME_BACK: 'Welcome back',
    LOGOUT: 'You are logged out',
    NO_PROJ_EXISTS: 'No projects exist yet',
    NO_REQ_EXIST: 'This component has no requirements, feel free to create',
    USER_NOT_LOADED: 'Could not load user',

    WARN_PROJ_NOT_LOADED: 'Warning: Project was not retrieved, refresh !',
    WARN_REQ_NOT_LOADED: 'Warning: the requirement was not loaded, refresh !',
    WARN_REQ_COMP_LOADED: 'Warning: the component was not loaded, refresh !',
    WARN_PROJS_NOT_LOADED: 'Warning: Could not load projects, please reload !',
    WARN_COMPS_NOT_LOADED: 'Warning: Could not load components',
    WARN_REQS_NOT_LOADED: 'Warning: Could not load requirements',
    WARN_COMMENTS_NOT_LOADED: 'Warning: Could not load comments',

    DEL_COMP: 'Deleted component: ',
    DEL_REQ: 'Deleted requirement: ',
    DEL_COMMENT: 'Deleted comment: ',
    WARN_REQ_NOT_DEL: 'Warning: Requirement was not deleted',
    WARN_COMP_NOT_DEL: 'Warning: Component was not deleted !',
    WARN_COMMENT_NOT_DEL: 'Warning: Comment was not deleted !',
    WARN_PROJ_NOT_UPDATED: 'Warning: Project was not updated',
    WARN_COMP_NOT_UPDATED: 'Warning: Component was not updated',
    WARN_REQ_NOT_UPDATED: 'Warning: Requirement was not updated',

    ALREADY_VOTED: 'You have already voted',
    WARN_VOTE_NOT_COUNTED: 'Warning: Vote was not counted, unknown reasons',
    WARN_NOT_REG_AS_DEV: 'Warning: could not register as a developer',
    WARN_NOT_REG_AS_FOLLOWER: 'Warning: could not register as a follower',

    LOGIN_PROJ: 'You must be logged in to edit or create projects',
    LOGIN_COMP: 'Please log in to create components',
    LOGIN_REQ: 'Please log in to create or edit requirements',
    LOGIN_PROJ_DEL: 'Please log in to delete projects',
    LOGIN_COMP_DEL: 'Please log in to delete components',
    LOGIN_REQ_DEL: 'Please log in to delete requirements',

    REQ_NAME_MISSING: 'Choose requirement name',
    COMP_NAME_MISSING: 'Choose component name',
    COMP_DESC_MISSING: 'Choose component description',
    PROJ_NAME_MISSING: 'Choose project name',
    PROJ_DESC_MISSING: 'Choose project description',
    COMMENT_TEXT_MISSING: 'Comment cannot be empty',
    WARN_REQ_NOT_CREATED: 'Warning: Requirement was not created !',
    WARN_COMP_NOT_CREATED: 'Warning: Component was not created !',
    WARN_PROJ_NOT_CREATED: 'Warning: Project was not created !',
    WARN_COMMENT_NOT_CREATED: 'Warning: Comment was not submitted !',
    ATTACHMENTS_NOT_INCLUDED: 'Warning: Attachments were not included !',

    //Confirmation dialog
    CONFIRM_DEL: 'Confirm delete',
    DEL_REQ_DESC: 'The action cannot be undone. All comments and attachments will be deleted!',
    DEL_COMP_DESC: 'The action cannot be undone. The requirements will be accessible under the default component.'

  })
    .translations('de', {
      ACCEPT: 'Akzeptieren',
      ACCESS_DENIED: 'Zugriff verweigert',
      BECOME_LEAD_DEV: 'Werden Sie ein leitender Entwickler',
      CANCEL: 'Abbrechen',
      CHOOSE_PROJECT: 'Projekt auswählen',
      COMMENT_PLACEHOLDER: 'Ihr Beitrag',
      COMMENTS:'Kommentare',
      COMPONENT: 'Neue Komponente',
      COMPONENT_LEAD: 'Komponent Leiter:',
      CREATE: 'Bestätigen',
      CREATE_PROJ: 'Neues Projekt',
      CREATE_COMP: 'Neues Komponent',
      CREATE_REQ: 'Neues Requirement',
      CREATED_BY: 'Erschaffer',
      DECLINE: 'Ablehnen',
      DEFAULT:'default',
      DELETE_COMP: 'Komponent löschen',
      DELETE_PROJECT: 'Projekt löschen',
      DELETE_REQUIREMENT: 'Requirement löschen',
      DESC: 'Beschreibung',
      DEVELOP_REQUIREMENT: 'DEVELOP_REQUIREMENT',
      DEVELOPERS: 'Entwickler',
      EDIT_REQUIREMENT: 'Requirement bearbeiten',
      EDIT_COMP: 'Bearbeite Komponent',
      EXIT_SETTINGS: 'Einstellungen verlassen',
      FILTER_COMPONENTS: 'suche Komponente',
      FILTER_PROJECTS: 'suche Projekte',
      FOLLOW_REQUIREMENT: 'Requirement folgen',
      FOLLOWERS: 'Folger',
      GENERAL_SETTINGS:'Algemeine Einstellungen',
      HIDE: 'X',
      HIDE_CONTRIBUTORS: 'Beiträger verstecken',
      LEADER: 'Leiter',
      LOGIN: 'Anmelden',
      MANAGE_USERS:'Benutzerrechte',
      MARK_AS_DONE: 'Markiere als fertig',
      MARK_AS_UNDONE: 'Nicht gelöst',
      PRIVATE: 'Privat',
      PROJECT: 'Neues Projekt',
      PUBLIC:'Öffentlich',
      REALIZED_REQ: 'Zeige umgesetzt',
      RECENT_CHANGES: 'Letzte Änderungen',
      RELOAD: 'Neuladen',
      REMOVE: 'löschen',
      SAVE: 'Speichern',
      SAVE_CHANGES: 'Übernehmen',
      SEARCH_PROJECTS: 'suche nach Projekte',
      SEARCH_REQUIREMENTS: 'suche nach Requirements',
      SET_DEFAULT_COMP: 'Setze als default',
      SETTINGS:'Einstellungen',
      SHOW_CONTRIBUTORS: 'Zeige Beiträger',
      SUBMIT:'Kommentar senden',
      TITLE: 'Titel - maximal 50 Zeichen',
      TITLE_AND_DESCRIPTION:'Titel und Beschreibung',
      VISIBILITY: 'Sichtbarkeit des Projektes',

      //Toast messages
      THANK_YOU:'Danke sehr',
      THANK_YOU_FOR_FOLLOWING: 'Danke fürs folgen',
      THANK_FOR_INIT: 'Danke für die Initiative',
      EDIT_SUCCESSFUL: 'Änderungen wurden übernommen',
      WARN_NOT_IMPL: 'Achtung: noch nicht implementiert',
      THANKS_FOR_FEEDBACK: 'Danke für die Rückmeldung',
      ERROR_UNKNOWN: 'Fehler ist aufgetreten, unbekannte Gründe!',
      REFRESH_PLEASE: 'Bitte die Seite neuladen',
      WELCOME_BACK: 'Willkommen zurück',
      LOGOUT: 'Erfolgreich abgemeldet',
      NO_PROJ_EXISTS: 'Es existieren noch keine Projekte',
      NO_REQ_EXIST: 'Dieses Komponent hat noch keine Requirements',
      USER_NOT_LOADED: 'Benutzer wurde nicht geladen',

      WARN_PROJ_NOT_LOADED: 'Achtung: Projekt wurde nicht geladen, Seite neuladen!',
      WARN_REQ_NOT_LOADED: 'Achtung: Requirement wurde nicht geladen, Seite neuladen!',
      WARN_REQ_COMP_LOADED: 'Achtung: Komponente wurde nicht geladen, Seite neuladen!',
      WARN_PROJS_NOT_LOADED: 'Achtung: Projekte wurden nicht geladen, Seite neuladen!',
      WARN_COMPS_NOT_LOADED: 'Achtung: Komponenten wurden nicht geladen!',
      WARN_REQS_NOT_LOADED: 'Achtung: Requirements wurden nicht geladen!',
      WARN_COMMENTS_NOT_LOADED: 'Achtung: Kommentare wurden nicht geladen!',

      DEL_COMP: 'Komponente gelöscht: ',
      DEL_REQ: 'Requirement gelöscht: ',
      DEL_COMMENT: 'Kommentar gelöscht: ',
      WARN_REQ_NOT_DEL: 'Achtung: Requirement wurde nicht gelöscht!',
      WARN_COMP_NOT_DEL: 'Achtung: Komponente wurde nicht gelöscht!',
      WARN_COMMENT_NOT_DEL: 'Achtung: Kommentar wurde nicht gelöscht!',
      WARN_PROJ_NOT_UPDATED: 'Achtung: Projekt wurde nicht aktualisiert',
      WARN_COMP_NOT_UPDATED: 'Achtung: Komponent wurde nicht aktualisiert',
      WARN_REQ_NOT_UPDATED: 'Achtung: Requirement wurde nicht aktualisiert',

      ALREADY_VOTED: 'Sie haben bereits abgestimmt',
      WARN_VOTE_NOT_COUNTED: 'Achtung: Stimme wurde nicht gezählt, unbekannte Gründe!',
      WARN_NOT_REG_AS_DEV: 'Achtung: Registrierung als Entwickler war nicht erfolgreich',
      WARN_NOT_REG_AS_FOLLOWER: 'Achtung: konnte nicht folgen',

      LOGIN_PROJ: 'Sie müssen angemeldet sein, um Projekte zu bearbeiten oder zu erstellen',
      LOGIN_COMP: 'Bitte loggen Sie sich ein, um Komponenten zu erstellen',
      LOGIN_REQ: 'Bitte loggen Sie sich ein, um Requirements zu erstellen',
      LOGIN_PROJ_DEL: 'Bitte loggen Sie sich ein, um Projekte zu löschen',
      LOGIN_COMP_DEL: 'Bitte loggen Sie sich ein, um Komponenten zu löschen',
      LOGIN_REQ_DEL: 'Bitte loggen Sie sich ein, um Requirements zu löschen',

      REQ_NAME_MISSING: 'Bitte die Name von der Requirement hinzufügen',
      COMP_NAME_MISSING: 'Bitte die Name von das Komponent hinzufügen',
      COMP_DESC_MISSING: 'Beschreibung fehlt',
      PROJ_NAME_MISSING: 'Bitte die Name von der Projekt hinzufügen',
      PROJ_DESC_MISSING: 'Beschreibung fehlt',
      COMMENT_TEXT_MISSING: 'Kommentar kann nicht leer sein',
      WARN_REQ_NOT_CREATED: 'Achtung: Requirement wurde nicht erstellt!',
      WARN_COMP_NOT_CREATED: 'Achtung: Komponente wurde nicht erstellt!',
      WARN_PROJ_NOT_CREATED: 'Achtung: Projekt wurde nicht erstellt!',
      WARN_COMMENT_NOT_CREATED: 'Achtung: Kommentar wurde nicht erstellt!',
      ATTACHMENTS_NOT_INCLUDED: 'Achtung: Anhänge wurden nicht berücksichtigt!',

      //Confirmation dialog
      CONFIRM_DEL: 'Löschen bestätigen',
      DEL_REQ_DESC: 'Die Aktion kann nicht rückgängig gemacht werden. Alle Kommentare und Anhänge werden gelöscht!',
      DEL_COMP_DESC: 'Die Aktion kann nicht rückgängig gemacht werden. Die Requirements werden im Rahmen des Standardkomponente zugänglich sein.'
  });


  //Determine which language to use
  $translateProvider.determinePreferredLanguage(function () {
    var language = window.navigator.userLanguage || window.navigator.language;
    console.log('The browser language is :'+language);

    if(language.indexOf('de') > -1){
      language = 'de';
    }else{
      language = 'en';
    }

    return language;
  });
});
