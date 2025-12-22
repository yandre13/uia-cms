import type { Schema, Struct } from '@strapi/strapi';

export interface CardsCard extends Struct.ComponentSchema {
  collectionName: 'components_cards_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CardsHomeFeatureHighlight extends Struct.ComponentSchema {
  collectionName: 'components_cards_home_feature_highlights';
  info: {
    displayName: 'Home Feature Highlight';
  };
  attributes: {
    badge_text: Schema.Attribute.String & Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'shared.cta', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface CardsServiceFeatureItem extends Struct.ComponentSchema {
  collectionName: 'components_cards_service_feature_items';
  info: {
    displayName: 'Service feature item';
  };
  attributes: {
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    features: Schema.Attribute.Component<'lists.service-feature', true>;
    icon: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface ListsServiceFeature extends Struct.ComponentSchema {
  collectionName: 'components_lists_service_features';
  info: {
    displayName: 'Service feature';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MenuMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_items';
  info: {
    displayName: 'Menu item';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    path: Schema.Attribute.String & Schema.Attribute.Required;
    text: Schema.Attribute.String;
  };
}

export interface MenuMenuList extends Struct.ComponentSchema {
  collectionName: 'components_menu_menu_lists';
  info: {
    displayName: 'Menu list';
  };
  attributes: {
    items: Schema.Attribute.Component<'menu.menu-item', true>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsContactBanner extends Struct.ComponentSchema {
  collectionName: 'components_sections_contact_banners';
  info: {
    displayName: 'Contact Banner';
  };
  attributes: {
    cta: Schema.Attribute.Component<'shared.cta', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHomeHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_home_heroes';
  info: {
    displayName: 'Home Hero';
  };
  attributes: {
    badge_text: Schema.Attribute.String & Schema.Attribute.Required;
    cta: Schema.Attribute.Component<'shared.cta', false> &
      Schema.Attribute.Required;
    description: Schema.Attribute.Blocks & Schema.Attribute.Required;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SectionsServiceBenefits extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_benefits';
  info: {
    displayName: 'Service Benefits';
  };
  attributes: {
    badge_text: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'cards.card', true> &
      Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsServiceHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_heroes';
  info: {
    displayName: 'Service Hero';
  };
  attributes: {
    badge_text: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.Blocks & Schema.Attribute.Required;
  };
}

export interface SectionsServiceOverview extends Struct.ComponentSchema {
  collectionName: 'components_sections_service_overviews';
  info: {
    displayName: 'Service Overview';
  };
  attributes: {
    badge_text: Schema.Attribute.String & Schema.Attribute.Required;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    items: Schema.Attribute.Component<'cards.service-feature-item', true>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedCta extends Struct.ComponentSchema {
  collectionName: 'components_shared_ctas';
  info: {
    displayName: 'CTA';
    icon: 'cursor';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'cards.card': CardsCard;
      'cards.home-feature-highlight': CardsHomeFeatureHighlight;
      'cards.service-feature-item': CardsServiceFeatureItem;
      'lists.service-feature': ListsServiceFeature;
      'menu.menu-item': MenuMenuItem;
      'menu.menu-list': MenuMenuList;
      'sections.contact-banner': SectionsContactBanner;
      'sections.home-hero': SectionsHomeHero;
      'sections.service-benefits': SectionsServiceBenefits;
      'sections.service-hero': SectionsServiceHero;
      'sections.service-overview': SectionsServiceOverview;
      'shared.cta': SharedCta;
    }
  }
}
