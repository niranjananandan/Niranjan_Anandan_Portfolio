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

    story = []

    # Name
    story.append(Paragraph("NIRANJAN ANANDAN", title_style))
    story.append(Spacer(1, 4))
    
    # Contact
    contact_text = "1u24ai024.niranjan@gmail.com &nbsp;|&nbsp; +91 6374515328 &nbsp;|&nbsp; linkedin.com/in/niranjan-anandan<br/>github.com/niranjan-anandan &nbsp;|&nbsp; niranjan-anandan-portfolio.vercel.app"
    story.append(Paragraph(contact_text, contact_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1, color=colors.HexColor('#cbd5e1'), spaceBefore=2, spaceAfter=8))

    # Career Summary
    story.append(Paragraph("CAREER SUMMARY", heading_style))
    summary_text = "Versatile AI and Machine Learning student with strong proficiency in Python, SQL, and data visualization tools. Experienced in managing multiple data sources to build intelligent solutions and track performance metrics. Looking to contribute technical and problem-solving expertise to a dynamic, forward-thinking organization."
    story.append(Paragraph(summary_text, body_style))
    story.append(Spacer(1, 6))

    # Education
    story.append(Paragraph("EDUCATION", heading_style))
    edu_text = "<b>Bachelor's in AI & ML</b> &nbsp;|&nbsp; <b>75%</b> &nbsp;|&nbsp; RVS College Of Arts & Science, Coimbatore (2027)<br/>" \
               "<b>HSC in Computer Maths</b> &nbsp;|&nbsp; <b>72.5%</b> &nbsp;|&nbsp; Annai Matric Higher Sec School, Tiruppur (2024)<br/>" \
               "<b>SSLC</b> &nbsp;|&nbsp; <b>77%</b> &nbsp;|&nbsp; Annai Matric Higher Sec School, Tiruppur (2022)"
    story.append(Paragraph(edu_text, body_style))
    story.append(Spacer(1, 6))

    # Skills
    story.append(Paragraph("SKILLS", heading_style))
    skills_text = "<b>TECHNICAL SKILLS:</b> Python, MYSQL, R (tidyverse, ggplot2), Data Visualization, ML, DL, GenAI.<br/>" \
                  "<b>SOFT SKILLS:</b> Leadership, Adaptability, Teamwork, Presentation.<br/>" \
                  "<b>TOOLS:</b> R studio, Jupyter Notebook, Github, VSCode, Google Colab, Power BI, Excel."
    story.append(Paragraph(skills_text, body_style))
    story.append(Spacer(1, 6))

    # Internships & Experience
    story.append(Paragraph("INTERNSHIPS & EXPERIENCE", heading_style))
    exp1 = "<b>PYTHON & GENAI TRAINEE | NET TEL SOLUTIONS</b><br/>" \
           "• Gained hands-on experience in Python programming and Generative AI fundamentals.<br/>" \
           "• Explored LLMs (Large Language Models) and prompt engineering techniques to optimize AI outputs."
    exp2 = "<b>ARTIFICIAL INTELLIGENCE & MACHINE LEARNING | INTERNSHALA</b><br/>" \
           "• Completed comprehensive training and hands-on projects in AI & ML learning.<br/>" \
           "• Utilized Python libraries such as Pandas, NumPy, and Scikit-learn for data preprocessing and model evaluation."
    story.append(Paragraph(exp1, body_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph(exp2, body_style))
    story.append(Spacer(1, 6))

    # Projects
    story.append(Paragraph("PROJECTS", heading_style))
    p1 = "<b>Natural Language Data Querying (NLQ) System</b><br/>" \
         "An AI-powered tool that lets users ask database questions in plain English and get instant SQL-backed answers."
    p2 = "<b>YOLOv5 Self-Driving Object Detection</b><br/>" \
         "Demonstrates real-time object detection for self-driving vehicle perception using the YOLOv5 deep learning model."
    p3 = "<b>THREAD.AI- Smart Textile Intelligence & AI Assistant</b><br/>" \
         "A smart AI assistant designed specifically for the textile industry."
    story.append(Paragraph(p1, body_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph(p2, body_style))
    story.append(Spacer(1, 4))
    story.append(Paragraph(p3, body_style))
    story.append(Spacer(1, 6))

    # Certifications
    story.append(Paragraph("CERTIFICATIONS", heading_style))
    certs = "• Artificial Intelligence & Machine Learning | Internshala<br/>" \
            "• Machine Learning Using Python | UpSkill<br/>" \
            "• Data Analytics With Generative AI | Simplilearn<br/>" \
            "• AI Essentials | Free Academy.Ai<br/>" \
            "• Cloud Computing | Unstop<br/>" \
            "• AI for Business Professionals | HP LIFE"
    story.append(Paragraph(certs, body_style))
    story.append(Spacer(1, 6))

    # Languages
    story.append(Paragraph("LANGUAGES", heading_style))
    story.append(Paragraph("TAMIL &nbsp;|&nbsp; ENGLISH &nbsp;|&nbsp; TELUGU", body_style))

    doc.build(story)
    print("PDF Resume created successfully at public/Niranjan_Anandan_Resume.pdf")

if __name__ == '__main__':
    create_resume()
