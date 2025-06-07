window.loadFooterComponent = function (targetId, props) {
  const targetElement = document.getElementById(targetId);

  if (!targetElement) {
    console.error(`Element with ID '${targetId}' not found.`);
    return;
  }

  // Helper function to get data attribute by camelCase prop name
  function getDataAttr(prop) {
    // Convert camelCase to kebab-case for data-attribute
    // e.g., servicesTitle -> services-title
    const attrName = "data-" + prop.replace(/([A-Z])/g, "-$1").toLowerCase();
    return targetElement.getAttribute(attrName) || "";
  }

  // Read all needed props from data attributes
  const props = {
    servicesTitle: getDataAttr("servicesTitle"),
    service1: getDataAttr("service1"),
    service2: getDataAttr("service2"),
    service3: getDataAttr("service3"),
    service4: getDataAttr("service4"),
    companyTitle: getDataAttr("companyTitle"),
    company1: getDataAttr("company1"),
    company2: getDataAttr("company2"),
    company3: getDataAttr("company3"),
    company4: getDataAttr("company4"),
    legalTitle: getDataAttr("legalTitle"),
    legal1: getDataAttr("legal1"),
    legal2: getDataAttr("legal2"),
    legal3: getDataAttr("legal3"),
    companyName: getDataAttr("companyName"),
    companyDescription: getDataAttr("companyDescription"),
  };

  const footerHTML = `
      <footer class="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
        <nav>
          <h6 class="footer-title">${props.servicesTitle}</h6>
          <a class="link link-hover">${props.service1}</a>
          <a class="link link-hover">${props.service2}</a>
          <a class="link link-hover">${props.service3}</a>
          <a class="link link-hover">${props.service4}</a>
        </nav>
        <nav>
          <h6 class="footer-title">${props.companyTitle}</h6>
          <a class="link link-hover">${props.company1}</a>
          <a class="link link-hover">${props.company2}</a>
          <a class="link link-hover">${props.company3}</a>
          <a class="link link-hover">${props.company4}</a>
        </nav>
        <nav>
          <h6 class="footer-title">${props.legalTitle}</h6>
          <a class="link link-hover">${props.legal1}</a>
          <a class="link link-hover">${props.legal2}</a>
          <a class="link link-hover">${props.legal3}</a>
        </nav>
      </footer>
      <footer class="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
        <aside class="grid-flow-col items-center">
          <p>
            ${props.companyName}<br />
            ${props.companyDescription}
          </p>
        </aside>
        <!-- Add your social icons here -->
      </footer>
    `;

  targetElement.innerHTML = footerHTML;
};
