export default function Head() {
    return (
      <>
        <title>My Simple App</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]);t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),e+"."+t},p=["capture","register","register_once","unregister","identify","alias","add_payment_method","set_distinct_id","clear_charges","set_person_properties","capture_pageview","reset","track_charge","track_pageview","track_links","track_forms","on","off","once","unsubscribe","capture_screen","on_click","bind_register_for_event","track_pageview_with_metadata","track_link_clicked","track_event","track_autocapture","track_click","track_submit","track_change","track_focus","track_blur","track_elements","track_exit","track_visibility","track_email_opened","track_email_clicked","track_sms_clicked","track_cta_clicked","onFeatureFlags","getFeatureFlag","isFeatureEnabled","getFeatureFlagPayload","reloadFeatureFlags","groupIdentify","resetGroups","setPersonPropertiesForFlags","resetPersonPropertiesForFlags"],i=0;i<p.length;i++)g(u,p[i]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_rpkEqRKayqjT2v86H1hpwhJguVUZkchiWdXpSixTAPl', {api_host: 'https://app.posthog.com'})
            `,
          }}
        />
      </>
    )
  }