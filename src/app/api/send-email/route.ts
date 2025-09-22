import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      projectType,
      message,
      budget,
      selectedDate,
      selectedTime,
    } = body;

    // Validation des champs requis
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    // Formatage de la date
    const formattedDate = selectedDate
      ? new Date(selectedDate).toLocaleDateString("fr-FR", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })
      : "Non spécifié";

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: "InnovyxWorks <noreply@innovyxworks.com>",
      to: ["contact@innovyxworks.com"],
      subject: `Nouvelle demande de consultation - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
          <div style="background: linear-gradient(135deg, #3b82f6, #6366f1); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
              🚀 Nouvelle demande de consultation
            </h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-bottom: 20px; font-size: 20px;">
              Informations du client
            </h2>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0; color: #64748b;">
                <strong style="color: #1e293b;">Nom complet :</strong> ${firstName} ${lastName}
              </p>
              <p style="margin: 8px 0; color: #64748b;">
                <strong style="color: #1e293b;">Email :</strong> ${email}
              </p>
              <p style="margin: 8px 0; color: #64748b;">
                <strong style="color: #1e293b;">Téléphone :</strong> ${
                  phone || "Non renseigné"
                }
              </p>
              <p style="margin: 8px 0; color: #64748b;">
                <strong style="color: #1e293b;">Entreprise :</strong> ${
                  company || "Non renseigné"
                }
              </p>
            </div>

            <h3 style="color: #1e293b; margin: 25px 0 15px 0; font-size: 18px;">
              Détails du projet
            </h3>
            
            <div style="margin-bottom: 20px;">
              <p style="margin: 8px 0; color: #64748b;">
                <strong style="color: #1e293b;">Type de projet :</strong> ${
                  projectType || "Non spécifié"
                }
              </p>
              <p style="margin: 8px 0; color: #64748b;">
                <strong style="color: #1e293b;">Budget estimé :</strong> ${
                  budget || "Non spécifié"
                }
              </p>
            </div>

            <h3 style="color: #1e293b; margin: 25px 0 15px 0; font-size: 18px;">
              Consultation
            </h3>
            
            <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 8px 0; color: #64748b;">
                <strong style="color: #1e293b;">Date prévue :</strong> ${formattedDate}
              </p>
              <p style="margin: 8px 0; color: #64748b;">
                <strong style="color: #1e293b;">Heure :</strong> ${
                  selectedTime || "Non spécifiée"
                }
              </p>
            </div>

            <h3 style="color: #1e293b; margin: 25px 0 15px 0; font-size: 18px;">
              Description du projet
            </h3>
            
            <div style="background: #f8fafc; padding: 15px; border-radius: 8px; border-left: 4px solid #3b82f6;">
              <p style="margin: 0; color: #475569; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                📧 Email envoyé automatiquement depuis le site InnovyxWorks
              </p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email envoyé avec succès", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
