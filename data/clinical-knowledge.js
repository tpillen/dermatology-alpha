/* DermKnowledge Clinical Knowledge Engine — Alpha 0.6 */
window.DERM_KNOWLEDGE_BASE = {
  "engine": {
    "name": "DermKnowledge Clinical Knowledge Engine",
    "engineVersion": "1.0",
    "knowledgeVersion": "1.0",
    "status": "Alpha prototype",
    "clinicalAuthority": "Clinician-authored prototype requiring formal clinical validation",
    "safetyBoundary": "Question pathways and transparent attention rules support data organization only. They do not diagnose disease, determine urgency, recommend treatment, or replace clinician review."
  },
  "pathwayOrder": [
    "rash",
    "lesion",
    "ak",
    "sk",
    "acne",
    "atopic",
    "contact",
    "psoriasis",
    "rosacea",
    "skin-cancer",
    "nevus",
    "wart",
    "fungal",
    "hair-loss",
    "pruritus",
    "other"
  ],
  "pathways": {
    "rash": {
      "key": "rash",
      "label": "Rash / dermatitis",
      "moduleTitle": "Inflammatory or Undifferentiated Rash",
      "clinicalPurpose": "Characterize distribution, progression, symptoms, exposures, and features that warrant prompt clinician review.",
      "questions": [
        {
          "id": "rashSpread",
          "label": "Is the rash spreading?",
          "type": "select",
          "options": [
            "No",
            "Slowly",
            "Rapidly",
            "Unsure"
          ],
          "attentionMap": {
            "Rapidly": {
              "points": 2,
              "flag": "Rapidly spreading rash"
            }
          }
        },
        {
          "id": "rashSymptoms",
          "label": "Which symptoms are present?",
          "type": "checkbox",
          "options": [
            {
              "label": "Itching",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Pain",
              "points": 2,
              "flag": "Painful rash"
            },
            {
              "label": "Burning",
              "points": 1,
              "flag": "Burning"
            },
            {
              "label": "Scaling",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Blistering",
              "points": 3,
              "flag": "Blistering"
            },
            {
              "label": "Bleeding",
              "points": 1,
              "flag": "Bleeding"
            }
          ]
        },
        {
          "id": "rashSystemic",
          "label": "Are any of these present?",
          "type": "checkbox",
          "options": [
            {
              "label": "Fever",
              "points": 3,
              "flag": "Fever"
            },
            {
              "label": "Mouth or eye involvement",
              "points": 4,
              "flag": "Mucosal involvement"
            },
            {
              "label": "Facial swelling",
              "points": 3,
              "flag": "Facial swelling"
            },
            {
              "label": "Difficulty breathing",
              "points": 5,
              "flag": "Difficulty breathing"
            },
            {
              "label": "None",
              "points": 0,
              "flag": ""
            }
          ]
        },
        {
          "id": "rashExposure",
          "label": "New medications, products, illness, travel, or exposures?",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "lesion": {
      "key": "lesion",
      "label": "New or changing lesion",
      "moduleTitle": "New or Changing Skin Lesion",
      "clinicalPurpose": "Capture evolution, bleeding, non-healing behavior, color or shape change, and relevant skin-cancer risk history.",
      "questions": [
        {
          "id": "lesionChange",
          "label": "What changes have been noticed?",
          "type": "checkbox",
          "options": [
            {
              "label": "Rapid growth",
              "points": 3,
              "flag": "Rapid growth"
            },
            {
              "label": "Larger",
              "points": 1,
              "flag": "Increasing size"
            },
            {
              "label": "Shape change",
              "points": 1,
              "flag": "Shape change"
            },
            {
              "label": "Multiple or changing colors",
              "points": 2,
              "flag": "Color variation"
            },
            {
              "label": "Bleeding",
              "points": 2,
              "flag": "Bleeding"
            },
            {
              "label": "Non-healing",
              "points": 2,
              "flag": "Non-healing"
            },
            {
              "label": "Pain",
              "points": 1,
              "flag": "Pain"
            },
            {
              "label": "Itching",
              "points": 0,
              "flag": ""
            }
          ]
        },
        {
          "id": "lesionPersonalHistory",
          "label": "Personal history of melanoma?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 3,
              "flag": "Personal melanoma history"
            }
          }
        },
        {
          "id": "lesionOtherCancer",
          "label": "Personal history of another skin cancer?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 1,
              "flag": "Other skin cancer history"
            }
          }
        },
        {
          "id": "lesionFamilyHistory",
          "label": "First-degree family history of melanoma?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 2,
              "flag": "Family melanoma history"
            }
          }
        },
        {
          "id": "lesionImmune",
          "label": "Immunosuppressed or transplant recipient?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 2,
              "flag": "Immunosuppression"
            }
          }
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "ak": {
      "key": "ak",
      "label": "Actinic keratosis / rough spots",
      "moduleTitle": "Actinic Keratosis or Rough Spots",
      "clinicalPurpose": "Capture lesion burden, symptoms, rapid thickening, and prior cryotherapy or field treatment.",
      "questions": [
        {
          "id": "akCount",
          "label": "Approximate number of rough spots",
          "type": "number",
          "min": 0,
          "max": null
        },
        {
          "id": "akSymptoms",
          "label": "Are the spots symptomatic?",
          "type": "checkbox",
          "options": [
            {
              "label": "Tender",
              "points": 1,
              "flag": "Tender"
            },
            {
              "label": "Itching",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Bleeding",
              "points": 2,
              "flag": "Bleeding"
            },
            {
              "label": "Thickening rapidly",
              "points": 2,
              "flag": "Rapid thickening"
            },
            {
              "label": "None",
              "points": 0,
              "flag": ""
            }
          ]
        },
        {
          "id": "akTreatment",
          "label": "Prior cryotherapy or field treatment?",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "sk": {
      "key": "sk",
      "label": "Seborrheic keratosis / irritated growth",
      "moduleTitle": "Seborrheic Keratosis or Irritated Growth",
      "clinicalPurpose": "Clarify irritation, bleeding, pain, rapid change, and diagnostic uncertainty.",
      "questions": [
        {
          "id": "skSymptoms",
          "label": "Why is the growth concerning?",
          "type": "checkbox",
          "options": [
            {
              "label": "Irritated by clothing",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Itching",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Bleeding",
              "points": 1,
              "flag": "Bleeding"
            },
            {
              "label": "Pain",
              "points": 1,
              "flag": "Pain"
            },
            {
              "label": "Rapid change",
              "points": 2,
              "flag": "Rapid change"
            },
            {
              "label": "Unsure of diagnosis",
              "points": 1,
              "flag": "Diagnostic uncertainty"
            }
          ]
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "acne": {
      "key": "acne",
      "label": "Acne",
      "moduleTitle": "Acne",
      "clinicalPurpose": "Document distribution, severity, scarring, reproductive treatment considerations, and prior therapy.",
      "questions": [
        {
          "id": "acneAreas",
          "label": "Areas affected",
          "type": "checkbox",
          "options": [
            {
              "label": "Face",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Chest",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Back",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Shoulders",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Other",
              "points": 0,
              "flag": ""
            }
          ]
        },
        {
          "id": "acneSeverity",
          "label": "Current severity",
          "type": "select",
          "options": [
            "Mild",
            "Moderate",
            "Severe",
            "Unsure"
          ],
          "attentionMap": {
            "Severe": {
              "points": 1,
              "flag": "Patient reports severe acne"
            }
          }
        },
        {
          "id": "acneScarring",
          "label": "Is scarring occurring?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 1,
              "flag": "Scarring"
            }
          }
        },
        {
          "id": "pregnancyStatus",
          "label": "Pregnant, trying to conceive, or breastfeeding?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Not applicable",
            "Prefer not to answer"
          ],
          "attentionMap": {
            "Yes": {
              "points": 1,
              "flag": "Pregnancy-related treatment consideration"
            }
          }
        },
        {
          "id": "acneTreatment",
          "label": "Treatments already tried",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "atopic": {
      "key": "atopic",
      "label": "Atopic dermatitis / eczema",
      "moduleTitle": "Atopic Dermatitis or Eczema",
      "clinicalPurpose": "Assess activity, sleep impact, pain, oozing or crusting, systemic symptoms, and treatment history.",
      "questions": [
        {
          "id": "eczemaStatus",
          "label": "Compared with previously",
          "type": "select",
          "options": [
            "Better",
            "Same",
            "Worse",
            "New problem"
          ],
          "attentionMap": {
            "Worse": {
              "points": 1,
              "flag": "Worsening"
            }
          }
        },
        {
          "id": "eczemaSymptoms",
          "label": "Associated symptoms",
          "type": "checkbox",
          "options": [
            {
              "label": "Itching",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Sleep disruption",
              "points": 1,
              "flag": "Sleep disruption"
            },
            {
              "label": "Oozing or crusting",
              "points": 1,
              "flag": "Oozing or crusting"
            },
            {
              "label": "Pain",
              "points": 1,
              "flag": "Pain"
            },
            {
              "label": "Fever",
              "points": 3,
              "flag": "Fever"
            }
          ]
        },
        {
          "id": "eczemaTreatment",
          "label": "Current and prior treatments",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "contact": {
      "key": "contact",
      "label": "Contact dermatitis",
      "moduleTitle": "Contact Dermatitis",
      "clinicalPurpose": "Identify possible topical, occupational, plant, metal, adhesive, medication, or product exposures.",
      "questions": [
        {
          "id": "contactExposure",
          "label": "New products, work exposures, plants, adhesives, metals, or topical medications?",
          "type": "text"
        },
        {
          "id": "contactWorkRelated",
          "label": "Could this be work-related?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 0,
              "flag": "Possible occupational exposure"
            }
          }
        },
        {
          "id": "contactSymptoms",
          "label": "Symptoms",
          "type": "checkbox",
          "options": [
            {
              "label": "Itching",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Burning",
              "points": 1,
              "flag": "Burning"
            },
            {
              "label": "Blistering",
              "points": 2,
              "flag": "Blistering"
            },
            {
              "label": "Swelling",
              "points": 1,
              "flag": "Swelling"
            }
          ]
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "psoriasis": {
      "key": "psoriasis",
      "label": "Psoriasis",
      "moduleTitle": "Psoriasis",
      "clinicalPurpose": "Assess change over time, itch, treatment adherence, and symptoms that may merit musculoskeletal review.",
      "questions": [
        {
          "id": "psoriasisStatus",
          "label": "Compared with previously",
          "type": "select",
          "options": [
            "Better",
            "Same",
            "Worse",
            "New problem"
          ],
          "attentionMap": {
            "Worse": {
              "points": 1,
              "flag": "Worsening"
            }
          }
        },
        {
          "id": "psoriasisItch",
          "label": "Itch severity from 0 to 10",
          "type": "number",
          "min": 0,
          "max": 10
        },
        {
          "id": "psoriasisJoint",
          "label": "Joint-related symptoms",
          "type": "checkbox",
          "options": [
            {
              "label": "Joint pain",
              "points": 1,
              "flag": "Joint pain"
            },
            {
              "label": "Joint swelling",
              "points": 2,
              "flag": "Joint swelling"
            },
            {
              "label": "Morning stiffness",
              "points": 2,
              "flag": "Morning stiffness"
            },
            {
              "label": "Swollen finger or toe",
              "points": 2,
              "flag": "Dactylitis-type symptom"
            },
            {
              "label": "None",
              "points": 0,
              "flag": ""
            }
          ]
        },
        {
          "id": "psoriasisTreatment",
          "label": "Any missed treatment doses?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Not applicable"
          ],
          "attentionMap": {
            "Yes": {
              "points": 0,
              "flag": "Missed treatment doses"
            }
          }
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "rosacea": {
      "key": "rosacea",
      "label": "Rosacea",
      "moduleTitle": "Rosacea",
      "clinicalPurpose": "Characterize flushing, persistent redness, inflammatory lesions, ocular symptoms, tissue change, and triggers.",
      "questions": [
        {
          "id": "rosaceaFeatures",
          "label": "Current features",
          "type": "checkbox",
          "options": [
            {
              "label": "Flushing",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Persistent redness",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Bumps or pustules",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Eye irritation",
              "points": 1,
              "flag": "Eye symptoms"
            },
            {
              "label": "Nasal thickening",
              "points": 1,
              "flag": "Tissue thickening"
            }
          ]
        },
        {
          "id": "rosaceaTriggers",
          "label": "Known triggers and treatments tried",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "skin-cancer": {
      "key": "skin-cancer",
      "label": "Known or suspected skin cancer",
      "moduleTitle": "Known or Suspected Skin Cancer",
      "clinicalPurpose": "Collect prior biopsy information, lesion behavior, recurrence, and symptoms for clinician review.",
      "questions": [
        {
          "id": "cancerConcern",
          "label": "Which features are present?",
          "type": "checkbox",
          "options": [
            {
              "label": "Rapid growth",
              "points": 3,
              "flag": "Rapid growth"
            },
            {
              "label": "Bleeding",
              "points": 2,
              "flag": "Bleeding"
            },
            {
              "label": "Non-healing sore",
              "points": 2,
              "flag": "Non-healing"
            },
            {
              "label": "Pain or tenderness",
              "points": 1,
              "flag": "Pain or tenderness"
            },
            {
              "label": "Multiple colors",
              "points": 2,
              "flag": "Color variation"
            },
            {
              "label": "Recurrent after treatment",
              "points": 2,
              "flag": "Recurrent lesion"
            }
          ]
        },
        {
          "id": "cancerPriorDiagnosis",
          "label": "Was this area previously biopsied or diagnosed?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 1,
              "flag": "Prior biopsy or diagnosis"
            }
          }
        },
        {
          "id": "cancerPriorResult",
          "label": "If previously biopsied, what was the result?",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "nevus": {
      "key": "nevus",
      "label": "Mole / nevus concern",
      "moduleTitle": "Mole or Nevus Concern",
      "clinicalPurpose": "Document patient-observed asymmetry, border, color, evolution, bleeding, and outlier appearance.",
      "questions": [
        {
          "id": "nevusFeatures",
          "label": "What concerns you about the mole?",
          "type": "checkbox",
          "options": [
            {
              "label": "Asymmetry",
              "points": 1,
              "flag": "Asymmetry"
            },
            {
              "label": "Irregular border",
              "points": 1,
              "flag": "Irregular border"
            },
            {
              "label": "Multiple colors",
              "points": 2,
              "flag": "Color variation"
            },
            {
              "label": "Growing or evolving",
              "points": 2,
              "flag": "Evolution"
            },
            {
              "label": "Bleeding",
              "points": 2,
              "flag": "Bleeding"
            },
            {
              "label": "Looks different from other moles",
              "points": 2,
              "flag": "Outlier lesion"
            }
          ]
        },
        {
          "id": "nevusPersonalHistory",
          "label": "Personal history of melanoma?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 3,
              "flag": "Personal melanoma history"
            }
          }
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "wart": {
      "key": "wart",
      "label": "Wart",
      "moduleTitle": "Wart",
      "clinicalPurpose": "Capture lesion burden, immune status, duration, and prior treatment response.",
      "questions": [
        {
          "id": "wartCount",
          "label": "Approximate number of warts",
          "type": "number",
          "min": 0,
          "max": null
        },
        {
          "id": "wartImmune",
          "label": "Immunosuppressed or transplant recipient?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 1,
              "flag": "Immunosuppression"
            }
          }
        },
        {
          "id": "wartTreatment",
          "label": "Prior treatments",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "fungal": {
      "key": "fungal",
      "label": "Fungal infection",
      "moduleTitle": "Possible Fungal Infection",
      "clinicalPurpose": "Record affected sites, relevant medical risks, and treatment attempts.",
      "questions": [
        {
          "id": "fungalSites",
          "label": "Areas affected",
          "type": "checkbox",
          "options": [
            {
              "label": "Feet",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Groin",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Body",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Scalp",
              "points": 1,
              "flag": "Scalp involvement"
            },
            {
              "label": "Nails",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Other",
              "points": 0,
              "flag": ""
            }
          ]
        },
        {
          "id": "fungalImmune",
          "label": "Immunosuppressed or diabetic?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 1,
              "flag": "Relevant medical risk"
            }
          }
        },
        {
          "id": "fungalTreatment",
          "label": "Treatments already tried",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "hair-loss": {
      "key": "hair-loss",
      "label": "Hair loss",
      "moduleTitle": "Hair Loss",
      "clinicalPurpose": "Characterize pattern, inflammatory scalp symptoms, possible triggers, and concern for scarring disease.",
      "questions": [
        {
          "id": "hairPattern",
          "label": "Pattern of hair loss",
          "type": "select",
          "options": [
            "Diffuse shedding",
            "Patchy",
            "Front or temples",
            "Scarring concern",
            "Unsure"
          ],
          "attentionMap": {
            "Scarring concern": {
              "points": 2,
              "flag": "Scarring hair-loss concern"
            }
          }
        },
        {
          "id": "hairSymptoms",
          "label": "Scalp symptoms",
          "type": "checkbox",
          "options": [
            {
              "label": "Itching",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Burning",
              "points": 1,
              "flag": "Burning"
            },
            {
              "label": "Pain or tenderness",
              "points": 1,
              "flag": "Pain or tenderness"
            },
            {
              "label": "Scaling",
              "points": 0,
              "flag": ""
            },
            {
              "label": "Pustules or drainage",
              "points": 2,
              "flag": "Pustules or drainage"
            },
            {
              "label": "None",
              "points": 0,
              "flag": ""
            }
          ]
        },
        {
          "id": "hairTrigger",
          "label": "Recent illness, surgery, stress, weight loss, pregnancy, or medication change?",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "pruritus": {
      "key": "pruritus",
      "label": "Itching without a clear rash",
      "moduleTitle": "Pruritus Without a Clear Rash",
      "clinicalPurpose": "Determine whether itching is localized or generalized and identify associated systemic symptoms.",
      "questions": [
        {
          "id": "itchRash",
          "label": "Is a rash visible?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {}
        },
        {
          "id": "itchGeneralized",
          "label": "Is the itching widespread?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 1,
              "flag": "Generalized pruritus"
            }
          }
        },
        {
          "id": "itchSystemic",
          "label": "Associated symptoms",
          "type": "checkbox",
          "options": [
            {
              "label": "Fever",
              "points": 2,
              "flag": "Fever"
            },
            {
              "label": "Weight loss",
              "points": 1,
              "flag": "Weight loss"
            },
            {
              "label": "Night sweats",
              "points": 1,
              "flag": "Night sweats"
            },
            {
              "label": "Yellowing of skin or eyes",
              "points": 2,
              "flag": "Jaundice-type symptom"
            },
            {
              "label": "None",
              "points": 0,
              "flag": ""
            }
          ]
        },
        {
          "id": "itchTreatment",
          "label": "Treatments already tried",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    },
    "other": {
      "key": "other",
      "label": "Other",
      "moduleTitle": "Other Dermatologic Concern",
      "clinicalPurpose": "Collect a concise description, recent change, symptoms, and treatment history.",
      "questions": [
        {
          "id": "generalChange",
          "label": "Has the condition changed recently?",
          "type": "select",
          "options": [
            "No",
            "Yes",
            "Unsure"
          ],
          "attentionMap": {
            "Yes": {
              "points": 1,
              "flag": "Recent change"
            }
          }
        },
        {
          "id": "generalTreatment",
          "label": "Treatments already tried",
          "type": "text"
        }
      ],
      "providerSummary": {
        "includePatientWording": true,
        "includeLocation": true,
        "includeDuration": true,
        "includeSymptoms": true,
        "includeAdaptiveResponses": true,
        "includeTransparentRuleFlags": true
      }
    }
  },
  "provenance": {
    "createdFor": "DermKnowledge Alpha 1.0",
    "reviewStatus": "Prototype clinical review pending",
    "changeControl": "Future changes should update knowledgeVersion and CHANGELOG.md",
    "sourceFrameworks": [
      "Clinician-authored dermatology history structure",
      "Common lesion change descriptors",
      "Symptom and risk-factor prompts used for structured clinical intake"
    ]
  }
};
