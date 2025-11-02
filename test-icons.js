// Test file to check available UX/Design icons
// Adobe Creative Suite - testing one by one
try {
  const { SiAdobe } = await import("react-icons/si");
  console.log("✅ SiAdobe available");
} catch (e) {
  console.log("❌ SiAdobe not available");
}

try {
  const { SiAdobephotoshop } = await import("react-icons/si");
  console.log("✅ SiAdobephotoshop available");
} catch (e) {
  console.log("❌ SiAdobephotoshop not available");
}

try {
  const { SiAdobelightroom } = await import("react-icons/si");
  console.log("✅ SiAdobelightroom available");
} catch (e) {
  console.log("❌ SiAdobelightroom not available");
}

try {
  const { SiAdobeillustrator } = await import("react-icons/si");
  console.log("✅ SiAdobeillustrator available");
} catch (e) {
  console.log("❌ SiAdobeillustrator not available");
}

try {
  const { SiAdobexd } = await import("react-icons/si");
  console.log("✅ SiAdobexd available");
} catch (e) {
  console.log("❌ SiAdobexd not available");
}

try {
  const { SiSketch } = await import("react-icons/si");
  console.log("✅ SiSketch available");
} catch (e) {
  console.log("❌ SiSketch not available");
}

try {
  const { SiFramer } = await import("react-icons/si");
  console.log("✅ SiFramer available");
} catch (e) {
  console.log("❌ SiFramer not available");
}
