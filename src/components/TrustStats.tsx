import React from 'react';
import { Star, MessageSquare, HeartHandshake, CheckCircle, ShieldCheck } from 'lucide-react';
import { DOCTOR_INFO, REVIEWS_DATA } from '../data/doctorData';

export const TrustStats: React.FC = () => {
  return (
    <section id="reputation" className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Google Rating */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-8 border-b border-slate-100 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold mb-3 border border-amber-200/70">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>Patient Experience & Social Proof</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              Trusted by Patients Across South Kolkata
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-xl">
              Genuine feedback from adult patients and families consulting at Arnay Medical for medicine and diabetes guidance.
            </p>
          </div>

          {/* Large Rating Highlight Box */}
          <div className="flex items-center gap-5 bg-slate-50/90 border border-slate-200/80 rounded-2xl p-4 sm:p-5 shadow-2xs self-start md:self-auto">
            <div className="flex flex-col">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {DOCTOR_INFO.googleRating}
                </span>
                <span className="text-sm font-semibold text-slate-500">/ 5.0</span>
              </div>
              <div className="flex text-amber-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <div className="text-xs font-medium text-slate-600">
                Based on <strong className="text-slate-900">{DOCTOR_INFO.totalReviews} Google Reviews</strong>
              </div>
            </div>

            <div className="h-12 w-px bg-slate-200" />

            <div className="text-left">
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-md border border-teal-100">
                <ShieldCheck className="w-3 h-3 text-teal-600" />
                Verified Reviews
              </span>
              <p className="text-xs text-slate-500 mt-1">
                Doctor · South Kolkata
              </p>
            </div>
          </div>
        </div>

        {/* The 3 Genuine Review Cards (Strictly using provided text and authorized patient names) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((review) => (
            <div
              key={review.id}
              className="bg-slate-50/70 hover:bg-white rounded-2xl p-6 border border-slate-200/80 hover:border-teal-200 transition-all duration-200 shadow-2xs hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* Rating and Google Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                    Google Review
                  </span>
                </div>

                {/* Review Excerpt */}
                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  “{review.text}”
                </blockquote>
              </div>

              {/* Reviewer Metadata */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 text-slate-700 font-bold text-xs flex items-center justify-center border border-slate-300">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 leading-tight">
                    {review.author}
                  </h4>
                  <p className="text-xs text-teal-700 font-medium">
                    {review.verifiedTheme}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer on Review Excerpts */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            * Patient review excerpts shared from publicly posted Google reviews. Individual health experiences and conditions vary.
          </p>
        </div>

      </div>
    </section>
  );
};
