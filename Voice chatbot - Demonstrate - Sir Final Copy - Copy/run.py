from flask import Flask, render_template, jsonify, request
import processor
from flask_mysqldb import MySQL

app = Flask(__name__)

app.config['MYSQL_HOST'] = "10.90.150.133"
app.config['MYSQL_USER'] = "hr_appln"
app.config['MYSQL_PASSWORD'] = "On1y4Appln_HR14"
app.config['MYSQL_DB'] = "hrapps"

mysql = MySQL(app)
app.config['SECRET_KEY'] = 'enter-a-very-secretive-key-3479373'


@app.route('/', methods=["GET", "POST"])
def index():
    return render_template('index.html', **locals())


@app.route('/chatbot2', methods=["GET", "POST"])
def chatbotResponse():
    if request.method == 'POST':
        the_question = request.form['question']
        company = request.form['company']
        print(the_question)
        import nltk
        from nltk.stem import WordNetLemmatizer
        sentences = nltk.sent_tokenize(the_question)
        lemmatizer = WordNetLemmatizer()
        s2 = ['Reliance', 'BPCL', 'IOCL', 'Nayara', 'MRPL', 'mrpl']
        for i in range(len(sentences)):
            words = nltk.word_tokenize(sentences[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in set(s2)]
        for i in words:
            the_question = i
            company = i

        print(the_question)
        print(company)
        # company = request.form['company']
        # print(company)
        invalid = request.form['invalid']

        if (the_question == company):
            response = processor.chatbot_response(the_question)
            return jsonify(response)

        else:
            return jsonify(invalid)


@app.route('/chatbot3', methods=["GET", "POST"])
def chatbotResponse2():
    if request.method == 'POST':
        the_question = request.form['question']

        import nltk
        from nltk.stem import WordNetLemmatizer
        sentences = nltk.sent_tokenize(the_question)
        lemmatizer = WordNetLemmatizer()
        s2 = ['Mundra', 'Kandla', 'Mumbai', 'JNPT', 'Goa', 'Mangalore', 'Kochi', 'Chennai', 'Vizag', 'Paradeep',
              'Paradip', 'Haldia', 'Budge Budge', 'Ennore']
        s3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
              'November', 'December']
        s4 = ['Reliance', 'BPCL', 'IOCL', 'Nayara', 'MRPL', 'mrpl']
        s5 = ['2020', '2021', '2022', '2023']
        for i in range(len(sentences)):
            words = nltk.word_tokenize(sentences[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in (set(s2) or set(s3) or set(s4) or set(s5))]
        for i in words:
            the_question = i
            print(the_question)

        company = request.form['company']
        import nltk
        from nltk.stem import WordNetLemmatizer
        sentences = nltk.sent_tokenize(company)
        lemmatizer = WordNetLemmatizer()
        s2 = ['Mundra', 'Kandla', 'Mumbai', 'JNPT', 'Goa', 'Mangalore', 'Kochi', 'Chennai', 'Vizag', 'Paradeep',
              'Paradip', 'Haldia', 'Budge Budge', 'Ennore']
        s3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
              'November', 'December']
        s4 = ['Reliance', 'BPCL', 'IOCL', 'Nayara', 'MRPL', 'mrpl']
        s5 = ['2020', '2021', '2022', '2023']
        for i in range(len(sentences)):
            words = nltk.word_tokenize(sentences[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in (set(s2) or set(s3) or set(s4) or set(s5))]
        for i in words:
            company = i
            print(company)

        invalid = request.form['invalid']

        month = request.form['month']
        year = request.form['year']
        if (company == "" or company != ""):

            port = request.form['port']
            if (port != ""):
                import nltk
                from nltk.stem import WordNetLemmatizer
                sentences = nltk.sent_tokenize(port)
                lemmatizer = WordNetLemmatizer()
                s2 = ['Mundra', 'Kandla', 'Mumbai', 'JNPT', 'Goa', 'Mangalore', 'Kochi', 'Chennai', 'Vizag', 'Paradeep',
                      'Paradip', 'Haldia', 'Budge Budge', 'Ennore']
                s3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                      'November', 'December']
                s4 = ['Reliance', 'BPCL', 'IOCL', 'Nayara', 'MRPL', 'mrpl']
                s5 = ['2020', '2021', '2022', '2023']
                for i in range(len(sentences)):
                    words = nltk.word_tokenize(sentences[i])
                    words = [lemmatizer.lemmatize(word) for word in words if
                             word in (set(s2) or set(s3) or set(s4) or set(s5))]
                for i in words:
                    port = i
                    print(port)

            month = request.form['month']
            if (month != ""):
                import nltk
                from nltk.stem import WordNetLemmatizer
                sentences = nltk.sent_tokenize(month)
                lemmatizer = WordNetLemmatizer()
                s2 = ['Mundra', 'Kandla', 'Mumbai', 'JNPT', 'Goa', 'Mangalore', 'Kochi', 'Chennai', 'Vizag', 'Paradeep',
                      'Paradip', 'Haldia', 'Budge Budge', 'Ennore']
                s3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
                      'November', 'December']
                s4 = ['Reliance', 'BPCL', 'IOCL', 'Nayara', 'MRPL', 'mrpl']
                s5 = ['2020', '2021', '2022', '2023']
                for i in range(len(sentences)):
                    words = nltk.word_tokenize(sentences[i])
                    words = [lemmatizer.lemmatize(word) for word in words if
                             word in (set(s2) or set(s3) or set(s4) or set(s5))]
                for i in words:
                    month = i
                    print(month)
            if ((the_question == port) or (the_question == company) or (the_question == month) or (
                    the_question == year)):
                response = processor.chatbot_response(the_question)
                return jsonify(response)

            else:
                return jsonify(invalid)


#
@app.route('/chatbot4', methods=["GET", "POST"])
def chatbotResponse3():
    if request.method == 'POST':
        invalid = request.form['invalid']
        return jsonify(invalid)


#
@app.route('/chatbot5', methods=["GET", "POST"])
def chatbotResponse5():
    if request.method == 'POST':
        # the_question = request.form['question']
        company = request.form['company']
        import nltk
        from nltk.stem import WordNetLemmatizer
        sentences = nltk.sent_tokenize(company)
        lemmatizer = WordNetLemmatizer()
        s2 = ['Reliance', 'BPCL', 'IOCL', 'Nayara', 'MRPL', 'mrpl']
        for i in range(len(sentences)):
            words = nltk.word_tokenize(sentences[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in set(s2)]
        for i in words:
            company = i
        response = processor.chatbot_response(company)
        return jsonify(response)
#         if (month == "" or month != ""):
#             print(the_question)
#             year = request.form['year']
#             print(year)
#             invalid = request.form['invalid']
#
#             if ((the_question == month) or (the_question == port) or(the_question == company)):
#                 response = processor.chatbot_response(the_question)
#                 return jsonify(response)
#
#             else:
#                 return jsonify(invalid)

@app.route('/chatbot6', methods=["GET", "POST"])
def chatbotResponse6():
    if request.method == 'POST':
        the_question = request.form['question']
        print(the_question)
        cont = request.form['cont']
        print(cont)
        invalid = request.form['invalid']
        # //do lemmatization of cont such that printing cont should convert i want 2020 to 2020


        if (the_question == cont):
            response = processor.chatbot_response(the_question)
            return jsonify(response)

        else:
            return jsonify(invalid)


@app.route('/chatbot', methods=["GET", "POST"])
def chatbot():
    if request.method == 'POST':
        the_question = request.form['question']

        company = request.form['company']
        import nltk
        from nltk.stem import WordNetLemmatizer
        sentences = nltk.sent_tokenize(company)
        lemmatizer = WordNetLemmatizer()
        s2 = ['Reliance', 'BPCL', 'IOCL', 'Nayara', 'MRPL', 'mrpl']
        for i in range(len(sentences)):
            words = nltk.word_tokenize(sentences[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in set(s2)]
        for i in words:
            company = i

        port = request.form['port']
        import nltk
        from nltk.stem import WordNetLemmatizer
        sentences = nltk.sent_tokenize(port)
        lemmatizer = WordNetLemmatizer()
        s2 = ['Mundra', 'Kandla', 'Mumbai', 'JNPT', 'Goa', 'Mangalore', 'Kochi', 'Chennai', 'Vizag', 'Paradeep',
              'Paradip',
              'Haldia', 'Budge Budge', 'Ennore']
        for i in range(len(sentences)):
            words = nltk.word_tokenize(sentences[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in set(s2)]
        for i in words:
            port = i

        month = request.form['month']
        import nltk
        from nltk.stem import WordNetLemmatizer
        sentences = nltk.sent_tokenize(month)
        lemmatizer = WordNetLemmatizer()
        s2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
              'November',
              'December']
        for i in range(len(sentences)):
            words = nltk.word_tokenize(sentences[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in set(s2)]
        for i in words:
            month = i

        year = request.form['year']
        import nltk
        from nltk.stem import WordNetLemmatizer
        sentences = nltk.sent_tokenize(year)
        lemmatizer = WordNetLemmatizer()
        s2 = ['2020', '2021', '2022', '2023']
        for i in range(len(sentences)):
            words = nltk.word_tokenize(sentences[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in set(s2)]
        for i in words:
            year = i

        # invalid = request.form['invalid']
        if (company == "mrpl"):
            company = company.upper()

            company = str(company)
        elif (company == "Reliance"):
            company = 'RIL'
            company = str(company)
            print(company)


        elif (company == "BPCL"):
            Port = 'Kochi'
            Port = [Port]
        elif (company == "IOCL"):
            Port = 'Paradeep'
            Port = [Port]
        elif (company == "RIL"):
            Port = 'Jamnagar'
            Port = [Port]
        elif (company == "Nayara"):
            Port = 'Vadinar'
            Port = [Port]
        elif (company == "MRPL" or company == "mrpl"):
            Port = 'Mangalore'
            Port = [Port]
        # port = request.form['port']
        print(port)
        port = str(port)
        import nltk
        from nltk.stem import WordNetLemmatizer
        sentences = nltk.sent_tokenize(port)
        lemmatizer = WordNetLemmatizer()
        s2 = ['Mundra', 'Kandla', 'Mumbai', 'JNPT', 'Goa', 'Mangalore', 'Kochi', 'Chennai', 'Vizag', 'Paradeep',
              'Paradip',
              'Haldia', 'Budge Budge', 'Ennore']
        for i in range(len(sentences)):
            words = nltk.word_tokenize(sentences[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in set(s2)]
        for i in words:
            port = i
        print(port)

        month = request.form['month']
        s3 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
              'November',
              'December']
        sentence2 = nltk.sent_tokenize(month)
        for i in range(len(sentence2)):
            words = nltk.word_tokenize(sentence2[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in set(s3)]
        print(words)
        for i in words:
            month = i
        print(month)

        year = request.form['year']
        s4 = ['2020', '2021', '2022', '2023']
        sentence3 = nltk.sent_tokenize(year)
        for i in range(len(sentence3)):
            words = nltk.word_tokenize(sentence3[i])
            words = [lemmatizer.lemmatize(word) for word in words if word in set(s4)]
        for i in words:
            year = i
        print(year)

        # month = request.form['month']
        # print(month)
        # month = str(month)

        # year = request.form['year']
        print(year)
        year = str(year)
        cur = mysql.connection.cursor()
        Avg_ch_rate = cur.execute(
            "select avg(ch_rate) as avg_ch_rate from shipaverages where (month=%s) and (year=%s) and active_status='A' and status='30'",
            (month, year))
        avg_ch_rate = cur.fetchall()
        if avg_ch_rate == ((None,),):
            avg_ch_rate = 0
            print("Avg charter rate is :", avg_ch_rate)
        else:
            for i in avg_ch_rate:
                avg_ch_rate = float((i[0]))
                avg_ch_rate = round(avg_ch_rate, 2)
                print("Avg Charter Hire is :", avg_ch_rate)
                # avg_ch_rate=str(avg_ch_rate)
                #         print(avg_ch_rate)
        #         list3 = [avg_ch_rate]

        exRate = cur.execute(
            "SELECT exchange_rate_1 FROM ship_exchange_rate where (year=%s) and (month=%s) and status='A'",
            (year, month))
        exRate = cur.fetchall()
        print(exRate)
        if exRate == (()):
            exRate = 0
            print("Exchange rate value is :", exRate)
        else:
            for i in exRate:
                exRate = float((i[0]))
                print("exRate value is :", exRate)
                print(type(exRate))

        if (company == "BPCL" or company == "IOCL"):
            exRate_another = cur.execute(
                "SELECT exchange_rate_2 FROM hrapps.ship_exchange_rate where (year=%s) and (month=%s) and  status='A'",
                (year, month))
            exRate_another = cur.fetchall()
            if exRate_another == (()):
                exRate_another = 0
                print("Exchange rate value is :", exRate_another)
            else:
                for i in exRate_another:
                    exRate_another = float((i[0]))
                    print("exRate_another value is :", exRate_another)

            exRate = ((exRate + exRate_another) / 2)
            print("exRate value is :", exRate)

        charter_hire = avg_ch_rate * exRate

        gst_5per = charter_hire * 0.05

        charter_hire_cost = charter_hire + gst_5per
        print("charter_hire_cost value is :", charter_hire_cost)
        print(type(charter_hire_cost))

        roundtripdis = cur.execute(
            "select * FROM shiproundtripdistance where Company ='{0}' and status='30'".format(company))
        roundtripdis = cur.fetchall()

        if roundtripdis == (()):
            roundtripdis = 0
            print("roundtripdis  is :", roundtripdis)
        else:
            for i in roundtripdis:
                if (port == "Mundra"):
                    roundtripdis = float(i[2])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Kandla"):
                    roundtripdis = float(i[3])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Mumbai"):
                    roundtripdis = float(i[4])
                    print("Round Trip value is :", roundtripdis)

                if (port == "JNPT"):
                    roundtripdis = float(i[5])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Goa"):
                    roundtripdis = float(i[6])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Mangalore"):
                    roundtripdis = float(i[7])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Kochi"):
                    roundtripdis = float(i[8])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Chennai"):
                    roundtripdis = float(i[9])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Vizag"):
                    roundtripdis = float(i[10])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Paradeep" or port == "Paradip"):
                    roundtripdis = float(i[11])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Haldia"):
                    roundtripdis = float(i[12])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Budge Budge"):
                    roundtripdis = float(i[13])
                    print("Round Trip value is :", roundtripdis)

                if (port == "Ennore"):
                    roundtripdis = float(i[14])
                    print("Round Trip value is :", roundtripdis)

        Avg_speed = cur.execute("select avg(average_speed_vessel) as avg_speed from shipaverages where (month=%s) and (year=%s) and active_status='A' and status='30'",(month, year))
        avg_speed = cur.fetchall()
        if avg_speed == ((None,),):
            avg_speed = 0
            print("avg_speed  is :", avg_speed)
        else:
            for i in avg_speed:
                avg_speed = float((i[0]))
                avg_speed = round(avg_speed, 2)
                print("avg_speed Hire is :", avg_speed)
                print(avg_speed)

        avg_speed = avg_speed * 24
        print("avg_speed value is :", avg_speed)
        print(type(avg_speed))

        if avg_speed == (0):
            transitDay = (roundtripdis)
        else:
            transitDay = (roundtripdis) / avg_speed
            transitDays = round(transitDay, 2)
            print("TransitDays value is :", transitDays)

        port_stay = 4.25

        charter_hire_cost = charter_hire_cost * (transitDay + port_stay)
        charter_hire_cost=round(charter_hire_cost,2)
        print("Charter Hire Cost value is :", charter_hire_cost)

        Avg_fo_in_sea = cur.execute("select avg(fo_in_sea) as avg_fo_in_sea from shipaverages where (month=%s) and (year=%s) and active_status='A' and status='30'",(month, year))
        avg_fo_in_sea = cur.fetchall()
        if avg_fo_in_sea == ((None,),):
            avg_fo_in_sea = 0
            print("avg_fo_in_sea is :", avg_fo_in_sea)
        else:
            for i in avg_fo_in_sea:
                avg_fo_in_sea = float((i[0]))
                avg_fo_in_sea = round(avg_fo_in_sea, 4)
                print("avg_fo_in_sea is :", avg_fo_in_sea)

        Fo_rate = cur.execute("select FORate from shipfohsdrates where (month=%s) and (year=%s) and status='30'",(month, year))
        FORate = cur.fetchall()
        if FORate == (()):
            # FORate = 'NAN'
            FORate = 0
            print("FORate value is :", FORate)
        else:
            for i in FORate:
                FORate = float((i[0]))
                print("FO Rate value is :", FORate)

        Hsd_rate = cur.execute("select HSDRate from shipfohsdrates where (month=%s) and (year=%s) and status='30'",(month, year))
        hsd_rate = cur.fetchall()
        if hsd_rate == (()):
            # hsd_rate = 'NAN'
            hsd_rate = 0
            print("HSD Rate value is :", hsd_rate)
        else:
            for i in hsd_rate:
                hsd_rate = float((i[0]))
                print("HSD Rate value is :", hsd_rate)

        Fo_Bunker_Cost = (((avg_fo_in_sea * transitDay) + 30) * FORate)
        Fo_Bunker_Cost=round(Fo_Bunker_Cost,2)
        print("FO Bunker Cost value is :", Fo_Bunker_Cost)

        Avg_hsd = cur.execute("select avg(hsd) as avg_hsd from shipaverages where (month=%s) and (year=%s) and active_status='A' and status='30'",(month, year))
        avg_hsd = cur.fetchall()
        if avg_hsd == ((None,),):
            avg_hsd = 0
            print("avg_hsd is :", avg_hsd)
        else:
            for i in avg_hsd:
                avg_hsd = float((i[0]))
                # avg_hsd = round(avg_hsd, 2)
                print("avg_hsd is :", avg_hsd)

        HSD_Bunker_Cost = (avg_hsd * (transitDay + port_stay) * hsd_rate)
        HSD_Bunker_Cost = round(HSD_Bunker_Cost, 2)
        print("HSD Bunker Cost value is :", HSD_Bunker_Cost)

        Bunker_Cost = Fo_Bunker_Cost + HSD_Bunker_Cost
        Bunker_Cost = round(Bunker_Cost, 2)
        print("Bunker Cost value is :", Bunker_Cost)

        Avg_grt = cur.execute("select avg(grt) as avg_grt from shipaverages where (month=%s) and (year=%s) and active_status='A' and status='30'",(month, year))

        avg_grt = cur.fetchall()
        if avg_grt == ((None,),):
            avg_grt = 0
            print("avg_grt is :", avg_grt)
        else:
            for i in avg_grt:
                avg_grt = float((i[0]))
                # avg_grt = round(avg_grt, 2)
                print("avg_grt is :", avg_grt)

        pilotage_charges = cur.execute("select pilotage_charges from ship_mundra_details2 where (month=%s) and (year=%s) and (insert_by_name=%s) and status='30'",(month, year, port))
        pilotage_charges = cur.fetchall()
        print(pilotage_charges)
        if pilotage_charges == (()):
            pilotage_charges = 0
            print("pilotage_charges value is :", pilotage_charges)
        else:
            for i in pilotage_charges:
                pilotage_charges = float((i[0]))
                pilotage_charges=round(pilotage_charges,6)
                print("pilotage_charges value is:", pilotage_charges)

        Anch_fees = cur.execute("select anch_fees from ship_mundra_details2 where (month=%s) and (year=%s) and (insert_by_name=%s) and status='30'",(month, year, port))
        anch_fees = cur.fetchall()
        if anch_fees == (()):
            anch_fees = 0
            print("anch_fees value is :", anch_fees)
        else:
            for i in anch_fees:
                anch_fees = float((i[0]))
                anch_fees = round(anch_fees, 2)
                print("anch_fees value is: ", anch_fees)

        Anch_fees_no_hrs = cur.execute("select anch_fees_no_hrs from ship_mundra_details1 where status='A'")
        anch_fees_no_hrs = cur.fetchall()
        for i in anch_fees_no_hrs:
            anch_fees_no_hrs = float((i[0]))
            anch_fees_no_hrs=round(anch_fees_no_hrs,2)
            print("anch_fees_no_hrs value is: ", anch_fees_no_hrs)

        Port_dues = cur.execute("select port_dues from ship_mundra_details2 where (month=%s) and (year=%s) and (insert_by_name=%s) and status='30'",(month, year, port))
        port_dues = cur.fetchall()
        if port_dues == (()):
            port_dues = 0
            print("port_dues value is :", port_dues)
        else:
            for i in port_dues:
                port_dues = float((i[0]))
                port_dues=round(port_dues,6)
                print("port_dues value is: ", port_dues)

        Berth_hire_charges = cur.execute("select berth_hire_charges from ship_mundra_details2 where (month=%s) and (year=%s) and (insert_by_name=%s) and status='30'",(month, year, port))
        berth_hire_charges = cur.fetchall()
        if berth_hire_charges == (()):
            berth_hire_charges = 0
            print("berth_hire_charges value is :", berth_hire_charges)
        else:
            for i in berth_hire_charges:
                berth_hire_charges = float((i[0]))
                berth_hire_charges=round(berth_hire_charges,6)
                print("berth_hire_charges value is: ", berth_hire_charges)

        berth_hire_no_hrs = cur.execute("select berth_hire_no_hrs from ship_mundra_details1 where status='A'")
        berth_hire_no_hrs = cur.fetchall()
        for i in berth_hire_no_hrs:
            berth_hire_no_hrs = float((i[0]))
            berth_hire_no_hrs = round(berth_hire_no_hrs, 2)
            print("berth_hire_no_hrs value is: ", berth_hire_no_hrs)

        Add_berth_hire_charges = cur.execute("select add_berth_hire_charges from ship_mundra_details2 where (month=%s) and (year=%s) and (insert_by_name=%s) and status='30'",(month, year, port))
        add_berth_hire_charges = cur.fetchall()
        if add_berth_hire_charges == (()):
            add_berth_hire_charges = 0
            print("add_berth_hire_charges value is :", add_berth_hire_charges)
        else:
            for i in add_berth_hire_charges:
                add_berth_hire_charges = float((i[0]))
                print("add_berth_hire_charges value is: ", add_berth_hire_charges)

        Vessel_traffic_service_charges = cur.execute("select vessel_traffic_service_charges from ship_mundra_details2 where (month=%s) and (year=%s) and (insert_by_name=%s) and status='30'",(month, year, port))
        vessel_traffic_service_charges = cur.fetchall()
        if vessel_traffic_service_charges == (()):
            vessel_traffic_service_charges = 0
            print("vessel_traffic_service_charges value is :", vessel_traffic_service_charges)
        else:
            for i in vessel_traffic_service_charges:
                vessel_traffic_service_charges = float((i[0]))
                print("vessel_traffic_service_charges value is: ", vessel_traffic_service_charges)

        if (port == "Mundra"):
            a = ((pilotage_charges * exRate * avg_grt) * 100) / 100
            a = round(a, 2)
            print("a value is: ", a)

            b = ((anch_fees * anch_fees_no_hrs * exRate * avg_grt) * 100) / 100
            b = round(b, 2)
            print("b value is: ", b)

            c = ((port_dues * exRate * avg_grt) * 100) / 100
            c = round(c, 2)
            print("c value is: ", c)

            d = ((berth_hire_charges * berth_hire_no_hrs * exRate * avg_grt) * 100) / 100
            d = round(d, 2)
            print("d value is: ", d)

            e = ((add_berth_hire_charges * exRate * avg_grt) * 100) / 100
            e = round(e, 2)
            print("e value is: ", e)

            f = ((vessel_traffic_service_charges * avg_grt) * 100) / 100
            f = round(f, 2)
            print("f value is: ", f)

            port_charges_inr = a + b + c + d + e + f
            port_charges_inr = round(port_charges_inr, 2)
            print("port_charges_inr value is: ", port_charges_inr)

            if avg_grt == (0):
                port_charges = ((port_charges_inr) * 100) / 100
            else:
                port_charges = ((port_charges_inr / avg_grt) * 100) / 100
                port_charges = round(port_charges, 2)
            print("port_charges value is: ", port_charges)

        if (port == "Kandla"):
            a = pilotage_charges * avg_grt
            a = round(a, 2)
            b = anch_fees * anch_fees_no_hrs
            b = round(b, 2)
            c = port_dues * avg_grt
            c = round(c, 2)
            d = berth_hire_charges * avg_grt * berth_hire_no_hrs
            d = round(d, 2)

            port_charges_inr = a + b + c + d
            port_charges_inr = round(port_charges_inr, 2)
            print("port_charges_inr value is: ", port_charges_inr)


            if avg_grt == (0):
                port_charges = ((port_charges_inr) * 100) / 100

            else:
                port_charges = ((port_charges_inr / avg_grt) * 100) / 100
                port_charges = round(port_charges, 2)

            print("port_charges value is: ", port_charges)

        if (port == "Mumbai" or port == "Goa" or port == "Chennai"):
            a = ((pilotage_charges * avg_grt) * 100) / 100
            a = round(a, 2)
            b = ((anch_fees * anch_fees_no_hrs * avg_grt) * 100) / 100
            b = round(b, 2)
            c = ((port_dues * avg_grt) * 100) / 100
            c = round(c, 2)
            d = ((berth_hire_charges * avg_grt * berth_hire_no_hrs) * 100) / 100
            d = round(d, 2)

            port_charges_inr = a + b + c + d
            port_charges_inr = round(port_charges_inr, 2)
            print("port_charges_inr value is: ", port_charges_inr)

            if avg_grt == (0):
                port_charges = ((port_charges_inr) * 100) / 100
            else:
                port_charges = ((port_charges_inr / avg_grt) * 100) / 100
                port_charges = round(port_charges, 2)
            print("port_charges value is: ", port_charges)

        if (port == "JNPT"):
            a = ((pilotage_charges * avg_grt) * 100) / 100
            a = round(a, 2)
            b = ((anch_fees * anch_fees_no_hrs * avg_grt) * 100) / 100
            b = round(b, 2)
            c = ((port_dues * avg_grt) * 100) / 100
            c = round(c, 2)
            d = ((berth_hire_charges * avg_grt * berth_hire_no_hrs) * 100) / 100
            d = round(d, 2)
            e = ((add_berth_hire_charges * avg_grt) * 100) / 100
            e = round(e, 2)

            port_charges_inr = a + b + c + d + e
            port_charges_inr = round(port_charges_inr, 2)
            print("port_charges_inr value is: ", port_charges_inr)

            if avg_grt == (0):
                port_charges = ((port_charges_inr) * 100) / 100
            else:
                port_charges = ((port_charges_inr / avg_grt) * 100) / 100
                port_charges = round(port_charges, 2)
            print("Port Charges (Rs./GRT) (B) ", port_charges)

        if (port == "Kochi" or port == "Vizag" or port == "Paradeep" or port == "Paradip" or port == "Haldia" or port == "Budge Budge" or port == "Ennore" or port == "Mangalore"):
            print("p",pilotage_charges)
            a = ((pilotage_charges * avg_grt) * 100) / 100
            a = round(a, 2)
            print(a)
            print("pd", port_dues)
            b = ((port_dues * avg_grt) * 100) / 100
            b = round(b, 2)
            print(b)
            print("b", berth_hire_charges)
            print("bh", berth_hire_no_hrs)
            print("avg", avg_grt)
            c = ((berth_hire_charges * avg_grt * berth_hire_no_hrs) * 100) / 100
            c = round(c, 2)
            print(c)

            port_charges_inr = a + b + c
            port_charges_inr = round(port_charges_inr, 2)
            print("port_charges_inr value is: ", port_charges_inr)

            if avg_grt == (0):
                port_charges = ((port_charges_inr) * 100) / 100
            else:
                port_charges = ((port_charges_inr / avg_grt) * 100) / 100
                port_charges = round(port_charges, 2)
            print("Port Charges (Rs./GRT) (B) ", port_charges)

        if (company == "RIL" and year == 2022):
            loading_port_charges = 30.89

        elif (company == "RIL"):
            loading_port_charges = 30.89
            print('Ril loading port charges is:', loading_port_charges)


        elif (company == "Nayara"):
            a = ((pilotage_charges * avg_grt) * 100) / 100
            a = round(a, 2)
            b = ((anch_fees * anch_fees_no_hrs) * 100) / 100
            b = round(b, 2)
            c = ((port_dues * avg_grt) * 100) / 100
            c = round(c, 2)
            d = ((berth_hire_charges * avg_grt * berth_hire_no_hrs) * 100) / 100
            d = round(d, 2)
            print(a)
            print(b)
            print(c)
            print(d)
            port_charges_inr = a + b + c + d

            if avg_grt == (0):
                loading_port_charges = ((port_charges_inr) * 100) / 100
            else:
                loading_port_charges = ((port_charges_inr / avg_grt) * 100) / 100
                loading_port_charges = round(loading_port_charges, 2)
            print("l is:", loading_port_charges)

        elif (company == "BPCL" or company == "IOCL" or company == "MRPL" or company == "mrpl" or company == "iocl" or company == "bpcl"):
            a = ((pilotage_charges * avg_grt) * 100) / 100
            a = round(a, 2)
            print("a value is:",a)
            b = ((port_dues * avg_grt) * 100) / 100
            b = round(b, 2)
            print("b value is:", b)
            c = ((berth_hire_charges * avg_grt * berth_hire_no_hrs) * 100) / 100
            c = round(c, 2)
            print("c value is:", c)

            port_charges_inr = a + b + c
            port_charges_inr = round(port_charges_inr, 2)
            print("port_charges_inr",port_charges_inr)

            if avg_grt == (0):
                loading_port_charges = ((port_charges_inr) * 100) / 100
            else:
                loading_port_charges = ((port_charges_inr / avg_grt) * 100) / 100
                loading_port_charges = round(loading_port_charges, 2)
                print('loading port charges is', loading_port_charges)

        Total_port_charges = port_charges + loading_port_charges
        Total_port_charges = round(Total_port_charges, 2)
        print("Port Charges value is : ", Total_port_charges)

        Total_port_cost = (avg_grt * (Total_port_charges) * 1.18)
        Total_port_cost = round(Total_port_cost, 2)
        print("Port Cost value is: ", Total_port_cost)

        if (Bunker_Cost == 0):
            Total_cost = 0
            print("Total Cost:", Total_cost)
        else:
            Total_cost = charter_hire_cost + Total_port_cost + Bunker_Cost
            print("Total Cost:", Total_cost)

        NCF = (Total_cost / 40000)

        NCF = round(NCF, 2)
        print("NCF value is :", NCF)
        # mylist = [NCF]
        # Company = [company]
        # port = [port]
        # month = [month]
        # year=[year]

        output = str(NCF)
        return jsonify(
            'The ncf for ' + '' + company + ' from ' + '' + port + '' + ' during ' + '' + month + '' + ' and year ' + year + ' is ' + output)
        # return jsonify(avg_ch_rate)


# @app.route('/data1', methods=["GET", "POST"])
# def data1():


if __name__ == '__main__':
    app.run(debug=True)