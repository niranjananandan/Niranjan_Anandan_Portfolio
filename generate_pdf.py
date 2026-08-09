from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable

def create_resume():
    pdf_path = "public/Niranjan_Anandan_Resume.pdf"
    doc = SimpleDocTemplate(
        pdf_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=36
    )

    styles = getSampleStyleSheet()
    
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=24,
        alignment=1, # Center
        textColor=colors.HexColor('#0f172a')
    )
    
    contact_style = ParagraphStyle(
        'ContactInfo',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=14,
        alignment=1,
        textColor=colors.HexColor('#475569')
    )
    
    heading_style = ParagraphStyle(
        'SectionHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=12,
        leading=16,
        textColor=colors.HexColor('#0ea5e9'),
        spaceBefore=8,
        spaceAfter=4
    )
    
    body_style = ParagraphStyle(
        'BodyText',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#1e293b')
    )
    
    bold_body_style = ParagraphStyle(
        'BoldBodyText',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=13.5,
        textColor=colors.HexColor('#0f172a')
    )

    story = []

    # Name
    story.append(Paragraph("NIRANJAN ANANDAN", title_style))
    story.append(Spacer(1, 4))
    
    # Contact
    contact_text = "1u24ai024.niranjan@gmail.com &nbsp;|&nbsp; +91 6374515328 &nbsp;|&nbsp; Tiruppur, Tamil Nadu<br/>GitHub: github.com/Niranjan2229 &nbsp;|&nbsp; LinkedIn: linkedin.com/in/niranjan-anandan"
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=8))

    # Career Summary
    story.append(Paragraph("CAREER SUMMARY", heading_style))
    summary_text = "Detail-oriented and analytical Artificial Intelligence and Machine Learning student with hands-on experience in Python, SQL, and predictive modeling. Adept at working with multiple data sources to extract actionable insights and track key performance metrics. Looking to bring strong analytical and problem-solving skills to the Data Analyst Role."
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 6))

    # Education
    story.append(Paragraph("EDUCATION", heading_style))
    edu_text = "<b>Bachelor's in AI & ML</b> &nbsp;|&nbsp; <b>75.3%</b> &nbsp;|&nbsp; RVS College Of Arts & Science, Coimbatore (2027 Candidate)<br/>" \
               "<b>HSC in Computer Maths</b> &nbsp;|&nbsp; <b>71.2%</b> &nbsp;|&nbsp; Annai Matric Higher Sec School, Tiruppur (2024)<br/>" \
               "<b>SSLC</b> &nbsp;|&nbsp; <b>77.2%</b> &nbsp;|&nbsp; Annai Matric Higher Sec School, Tiruppur (2022)"
    story.append(Paragraph(edu_text, body_style))
    story.append(Spacer(1, 6))

    # Skills
    story.append(Paragraph("SKILLS", heading_style))
    skills_text = "<b>TECHNICAL SKILLS:</b> Machine Learning, Deep Learning, Python, MYSQL, R (tidyverse, ggplot2), Data Visualization, HTML.<br/>" \
                  "<b>SOFT SKILLS:</b> Leadership, Adaptability, Teamwork, Presentation.<br/>" \
                  "<b>TOOLS:</b> RStudio, Jupyter Notebook, Git, VSCode, Power BI, Claude 3.5, GPT-4o."
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 6))

    # Projects
    story.append(Paragraph("PROJECTS", heading_style))
    p1 = "<b>PIXELFOODIE | INDIAN STYLE FOOD RECIPE WEB PAGE</b><br/>" \
         "Developed an innovative food recipe website integrating AI for smart ingredient matching and restaurant-style dish suggestions."
    p2 = "<b>CYBERMEDIA | CYBERTHREATS & SAFETY</b><br/>" \
         "Demonstrated a deep understanding of cyber threats."
    p3 = "<b>PowerBI-Retail-Profitability-Dashboard</b><br/>" \
         "An interactive Power BI dashboard analyzing seasonal textile sales and material profitability. Built with Power Query and DAX, featuring a modern, dark-themed UI for actionable insights."
    story.append(Paragraph(p1, body_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph(p2, body_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph(p3, body_style))
    story.append(Spacer(1, 6))

    # Certifications
    story.append(Paragraph("CERTIFICATIONS", heading_style))
    certs = "• Machine Learning Using Python | SIMPLILEARN (2026)<br/>" \
            "• Introduction To Generative AI | AWS by AMAZON (2026)<br/>" \
            "• Google AI & Gen AI Workflow | GOOGLE GEMINI (2025)<br/>" \
            "• AI For Business Professionals | HP LIFE (2025)<br/>" \
            "• Photoshop for Web designer | INFOSYS"
    story.append(Paragraph(certs, body_style))
    story.append(Spacer(1, 6))

    # Achievements
    story.append(Paragraph("ACHIEVEMENTS", heading_style))
    ach = "• Java Premier League (Participated) - RVSCAS (2026)<br/>" \
          "• Young Innovators Ideathon (Participated) - SignSpeakAI (2025)<br/>" \
          "• Science Exhibition (Participated) - Arduino Radar - RVS CAS (2025)"
    story.append(Paragraph(ach, body_style))
    story.append(Spacer(1, 6))

    # Languages
    story.append(Paragraph("LANGUAGES", heading_style))
    story.append(Paragraph("Tamil &nbsp;|&nbsp; English &nbsp;|&nbsp; Telugu", body_style))

    doc.build(story)
    print("PDF Resume created successfully at public/Niranjan_Anandan_Resume.pdf")

if __name__ == '__main__':
    create_resume()
