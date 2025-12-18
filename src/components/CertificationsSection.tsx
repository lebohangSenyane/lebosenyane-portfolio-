import { Award, ExternalLink } from "lucide-react";

const CertificationsSection = () => {
  return (
    <section id="certifications" className="min-h-[60vh] px-6 md:px-12 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">
          <span className="gradient-text">Certifications</span>
        </h2>

        <div className="flex flex-col items-center text-center space-y-8">
          <p className="text-lg text-muted-foreground max-w-xl">
            Professional certifications and credentials that validate my expertise in AI and machine learning.
          </p>

          <a
            href="https://capeitinitiative.sharepoint.com/sites/FNBAcademy2025JHB_dp1y4b/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FFNBAcademy2025JHB%5Fdp1y4b%2FShared%20Documents%2FGeneral%2FCertificates%20%26%20Badges%2FLebohang%5FSenyane&p=true&ga=1"
            target="_blank"
            rel="noopener noreferrer"
            className="glass p-8 rounded-2xl flex flex-col items-center gap-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 max-w-md w-full group"
          >
            <div className="w-20 h-20 rounded-full gradient-bg flex items-center justify-center">
              <Award size={40} className="text-primary-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">FNB Academy Certificates & Badges</h3>
              <p className="text-muted-foreground text-sm">
                View my professional certifications and achievements
              </p>
            </div>
            <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              <span>View Certificates</span>
              <ExternalLink size={18} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
